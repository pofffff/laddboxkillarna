export default {
  async contactEmail({ commit }, email) {
    console.log(email)
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/contact`, email)
      .then((response) => {
        console.log(response)
        commit('responseHandler', response.data)
      })
      .catch((error) => {
        const customError = {
          status: 500,
          message: 'Tekniskt fel, vänligen kontakta oss via telefon',
        }

        if (error.response === undefined) {
          commit('responseHandler', customError)
        }
        if (error.response.data.error) {
          commit('responseHandler', error.response.data.error)
        } else {
          commit('responseHandler', customError)
        }
      })
  },

  async orderEmail({ commit }, order) {
    console.log(order)
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/order`, order)
      .then((response) => {
        console.log(response)
        if (response.data) commit('responseHandler', response.data)
      })
      .catch((error) => {
        const customError = {
          status: 500,
          message: 'Tekniskt fel, vänligen kontakta oss via telefon',
        }

        if (error.response === undefined) {
          commit('responseHandler', customError)
        }
        if (error.response.data.error) {
          commit('responseHandler', error.response.data.error)
        } else {
          commit('responseHandler', customError)
        }
      })
  },
}
