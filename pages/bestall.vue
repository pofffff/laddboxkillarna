<template>
  <div class="wrapper__installation">
    <InstallationVillkor v-if="terms" />
    <div class="container">
      <h1>Beställ Laddbox</h1>
      <section class="divider">
        <section class="text">
          <h2>Installation</h2>
          <p class="text__secondary">
            Då alla installationer har olika förutsättningar för att kunna
            möjliggöra en säker installation har vi utformat ett s.k standard
            avtal som de flesta installationer täcker. Är du osäker på om
            standard-installation täcker dina behov? Alla eventuella frågor kan
            oftast besvaras via telefon och om du som kund känner dig osäker
            utför vi såklart ett kostnadsfritt kundbesök.
          </p>
          <br />
          <p class="text__secondary">
            Från att du fyllt i kontaktformuläret garanterar vi att återkoppla
            inom 24 timmar för att boka tid för installation eller kundbesök för
            att utvärdera dina behov.
          </p>
          <br />
          <div class="standard">
            <h3>Standard installation</h3>
            <p>10 Meter installationskabel</p>
            <p>Jordfelsbrytare & säkring</p>
            <p>Fästmaterial</p>
            <p>Håltagningar</p>
            <span class="span_underline"
              >OBS! Laddkabel ingår ej men går att lägga till vid
              beställning</span
            >
          </div>
          <br />
          <div class="need">
            <div class="need_title">
              <h3>Vid behov</h3>
              <span>(extra tillägg)</span>
            </div>
            <p>Lastbalansering</p>
            <p>Grävning</p>
            <p>Installationskabel utöver 10 meter</p>
            <p>Uppsäkring</p>
            <p>Kapsling för jordfelsbrytare/säkring</p>
            <p>Kabelskydd</p>
            <p>Kabellistning</p>
            <span class="span_underline" @click="showExtra"
              >Läs mer om extra tillägg och se prislista
            </span>
            <fa :icon="fas.faLink" />
            <InstallationTillagg v-if="extra" @showExtra="showExtra" />
          </div>
        </section>
        <section class="inputs">
          <h2>Intresseanmälan</h2>
          <form
            @submit.prevent="validateInputs"
            class="form__container"
            autocomplete="on"
          >
            <div class="names">
              <input
                v-model="order.firstName"
                type="text"
                autocomplete="given-name"
                placeholder="Förnamn"
                class="user_input"
                :class="validation.firstName ? '' : 'inputNotValid'"
                title="Vänligen fyll i namn"
                required
              />
              <input
                v-model="order.lastName"
                type="text"
                autocomplete="family-name"
                placeholder="Efternamn"
                class="user_input"
                :class="validation.lastName ? '' : 'inputNotValid'"
                title="Vänligen fyll i efternamn"
                required
              />
            </div>
            <input
              v-model="order.street"
              type="text"
              name="address-line1"
              placeholder="Gatuadress & Gatunummer (där laddbox ska installeras)"
              class="user_input"
              :class="validation.street ? '' : 'inputNotValid'"
              min="5"
              max="50"
              title="Vänligen fyll i en giltig gatuadress"
              required
            />
            <input
              v-model="order.postNr"
              autocomplete="postal-code"
              placeholder="Postnummer"
              class="user_input"
              :class="validation.postNr ? '' : 'inputNotValid'"
              required
              title="Fyll i ett giltigt postnummer '123 45'"
            />
            <input
              v-model="order.state"
              type="text"
              name="address-level2"
              placeholder="Ort"
              class="user_input"
              :class="validation.state ? '' : 'inputNotValid'"
              max="50"
              min="2"
              title="Fyll i en giltig postort"
              required
            />
            <input
              v-model="order.email"
              type="email"
              autocomplete="email"
              placeholder="Epost"
              class="user_input"
              :class="validation.email ? '' : 'inputNotValid'"
              required
            />
            <input
              v-model="order.phoneNr"
              type="number"
              autocomplete="tel-national"
              placeholder="Telefonnummer"
              class="user_input"
              :class="validation.phoneNr ? '' : 'inputNotValid'"
              required
            />
            <textarea
              v-model="order.information"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Övriga upplysningar"
              class="user_input textarea"
            ></textarea>
            <div>
              <span :class="chargerErrorMsg ? 'error' : ''"
                >Välj laddbox: {{ charger }}</span
              >
              <SharedChargerPicker @selectCharger="selectCharger" />
            </div>
            <div v-if="this.order.charger == 'Zaptec Go'">
              <span :class="colorErrorMsg ? 'error' : ''"
                >Välj färg: {{ color }}</span
              >
              <SharedColorPicker @selectColor="selectColor" />
            </div>
            <div v-if="this.order.charger === 'Easee'">
              <span>Välj färg: Svart</span>
              <SharedBlackColor />
            </div>
            <div class="checkboxes">
              <div class="checkbox">
                <input
                  v-model="order.consultation"
                  type="checkbox"
                  id="consulation"
                />
                <label for="consulation" class="custom-checkbox"
                  >Jag behöver konsultation kring extra tillägg vid
                  beställning</label
                >
              </div>
              <div class="checkbox">
                <input
                  v-model="order.charging_cable"
                  type="checkbox"
                  id="cable"
                />
                <label for="cable" class="custom-checkbox"
                  >Jag vill beställa till en laddkabel
                </label>
                <div
                  class="div__question"
                  @mouseenter="cable = true"
                  @mouseout="cable = false"
                >
                  <img
                    src="~/assets/logo/question_mark.svg"
                    alt="question mark"
                  />
                </div>
              </div>
              <InstallationLaddkabel v-if="cable" />
              <div class="checkbox">
                <input
                  v-model="order.agreement"
                  type="checkbox"
                  id="agreement"
                />
                <label for="agreement" class="custom-checkbox"
                  >Jag har tagit del av
                </label>
                <nuxt-link target="_blank" to="/policys"
                  ><span @click="showTerms" class="span_underline villkor">
                    integritetspolicy</span
                  ></nuxt-link
                >
              </div>
            </div>
            <span class="validation_agreement" v-if="agreementErrorMsg"
              >Du behöver läsa och acceptera Integritetspolicy för att lägga en
              intresseanmälan</span
            >
            <SharedStatusMessage :statusMessage="statusMessage" />
            <SharedStatusMessage
              v-if="formatErrorMsg"
              :statusMessage="formatMessage"
            />
            <button type="submit" class="primary submit__black">
              Skicka intresseanmälan
            </button>
          </form>
        </section>
      </section>
      <!-- <iframe
        src="https://widget.reco.se/v2/widget/4038326?mode=MINI&border=false"
        width="100%"
        height="225"
        scrolling="no"
        style="border: 0; display: block"
        data-reactroot=""
        class="reco__frame"
      ></iframe> -->
    </div>
  </div>
</template>

<script>
import products from '@/assets/productJSON/products.json'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { mapState, mapActions, mapMutations } from 'vuex'
import { validateOrder } from '@/modules/validation'

export default {
  head: {
    title:
      'Beställ laddbox & installation till fast pris | Laddboxkillarna Göteborg',
    slug: 'https://www.laddboxkillarna.se/bestall',
    meta: [
      {
        hid: 'bestall',
        name: 'bestall',
        content:
          'Vi erbjuder laddbox och installation till fast pris med avdraget Grön Teknik! Vi kontaktar er inom 24 timmar efter lagd beställning.',
      },
    ],
  },
  middleware: 'status_message',
  data() {
    return {
      products: products,
      color: '',
      charger: '',
      terms: false,
      cable: false,
      extra: false,
      validation: {
        firstName: true,
        lastName: true,
        street: true,
        postNr: true,
        state: true,
        email: true,
        phoneNr: true,
        charger: true,
        color: true,
        agreement: true,
      },
      order: {
        firstName: '',
        lastName: '',
        street: '',
        postNr: '',
        state: '',
        email: '',
        phoneNr: '',
        information: '',
        charger: '',
        color: '',
        consultation: false,
        charging_cable: false,
        agreement: false,
      },
      agreementErrorMsg: false,
      chargerErrorMsg: false,
      colorErrorMsg: false,
      formatErrorMsg: false,
      formatMessage: {
        success: false,
        message: 'Röda fält ej giltiga',
      },
    }
  },
  computed: {
    ...mapState({
      statusMessage: (state) => state.statusMessage,
    }),
    fas() {
      return fas
    },
  },
  methods: {
    ...mapActions(['orderEmail']),
    ...mapMutations(['responseHandler']),

    selectColor(color) {
      const index = this.products.colors.findIndex(function (element) {
        return element.id === color.id
      })
      this.color = this.products.colors[index].name
      this.order.color = color.name
    },
    selectCharger(charger) {
      this.charger = charger
      this.order.charger = charger

      if (this.order.charger === 'Easee') {
        this.color = "Svart"
        this.order.color = 'Svart'
      } else {
        this.color = ''
      }
    },
    showTerms() {
      this.terms = true
    },
    showExtra() {
      this.extra = !this.extra
    },
    trimObject(obj) {
      return (obj = {
        firstName: obj.firstName.trim(),
        lastName: obj.lastName.trim(),
        street: obj.street.trim(),
        postNr: obj.postNr.trim(),
        state: obj.state.trim(),
        email: obj.email.trim(),
        phoneNr: obj.phoneNr.trim(),
        information: obj.information,
        charger: obj.charger,
        color: obj.color,
        consultation: obj.consultation,
        charging_cable: obj.charging_cable,
        agreement: obj.agreement,
      })
    },
    async validateInputs() {
      this.formatErrorMsg = false
      const order = await this.trimObject(this.order)
      this.validation = await validateOrder(order)


      const isValid = Object.values(this.validation).every(
        (item) => item === true
      )
      this.chargerErrorMsg = this.validation.charger ? false : true
      this.colorErrorMsg = this.validation.color ? false : true
      this.agreementErrorMsg = this.order.agreement ? false : true
      this.formatErrorMsg = !isValid


      if (isValid === true && this.order.agreement === true) {
        this.sendOrder(order)
      }
    },
    sendOrder(order) {
      this.orderEmail(order)
    },
  },
}
</script>

<style lang="scss">
.submit__black {
  @include btn;
  background-color: $black;
  color: $white;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  box-shadow: $shadow_btn_black;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: $shadow_btn_black-hover;
    transform: scale(1.03);
  }

  &:hover {
    color: $black;
    background: none;
  }
}

.wrapper__installation {
  min-height: 100vh;
  font-family: $headline;
  padding: 10% 0;

  .container {
    width: 1300px;
    margin: auto;
  }
  .divider {
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
  }
  .text {
    width: 50%;

    .text__secondary {
      width: 90%;
    }
    .fa-link {
      color: black;
      font-size: 1rem;
    }
    .standard {
      font-weight: 700;
    }
    .need {
      font-weight: 700;

      .need_title {
        display: flex;
        align-items: center;

        h3 {
          margin-right: 0.5rem;
        }
        span {
          font-weight: 700;
        }
      }
    }
  }

  .submit__button {
    margin-top: 1rem;
  }

  .span_underline {
    text-decoration: underline;
    font-weight: 400;
    color: $black;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    grid-area: form;

    .form__container {
      display: flex;
      flex-direction: column;

      .names {
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
          width: 49%;
        }
      }

      .user_input {
        @include input;
      }

      .user_input {
        @include input;
        border-radius: 2rem;
      }

      .textarea {
        margin-bottom: 1rem;
      }

      .validation_agreement {
        color: $red;
      }
    }
    .checkboxes {
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 1rem 0;

      span {
        text-decoration: underline;
        cursor: pointer;
      }

      .checkbox {
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        .villkor {
          margin-left: 0.3rem;
        }

        #consulation,
        #cable,
        #agreement {
          appearance: none;
          outline: none;
          min-width: 1.2rem;
          min-height: 1.2rem;
          border: 1px solid $black;
          margin-right: 1rem;
          border-radius: 6px;

          position: relative;

          &:checked {
            background-color: $black;
          }
          &:checked:after {
            content: '\2714';
            font-size: 0.8rem;
            position: absolute;
            top: -1px;
            left: 3px;
            color: $white;
          }
        }
        .div__question {
          background: white;
          cursor: pointer;

          img {
            padding: 5px;
          }
        }
      }
    }
  }
}

.error {
  color: $red;
}

.inputNotValid {
  border: 1px solid $red !important;
}

.reco__frame {
  margin-top: 6rem;
}
@media only screen and (max-width: 1350px) {
  .wrapper__installation {
    .container {
      width: 1100px;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__installation {
    padding: 20% 10%;
    .container {
      width: 100%;
    }
    .divider {
      flex-direction: column;
    }
    .text {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 950px) {
  .wrapper__installation {
    .standard,
    .need {
      font-size: 1.3rem;
    }
    .text {
      padding: 0rem 1rem;
    }
    .inputs {
      padding: 3rem 1rem;

      .checkboxes {
        font-size: 1.3rem;

        .checkbox {
          #consulation,
          #cable,
          #agreement {
            min-width: 2rem;
            min-height: 2rem;
            &:checked {
              background-color: $black;
            }
            &:checked:after {
              top: 50%;
              transform: translate(-50%, -50%);
              left: 50%;
            }
          }
        }
      }
    }
    input,
    span {
      font-size: 1.5rem;
    }
  }
}
</style>
