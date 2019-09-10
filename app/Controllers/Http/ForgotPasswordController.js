'use strict'

const Mail = use('Mail');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class ForgotPasswordController {
  async store({ request }) {

   // try{

      const email = request.input('email');

      console.log('Email: ', email);

      const user = await User.findByOrFail('email', email);
      // findByOrFail('email', email);  Se não encontrar ele cai em uma sessão ele previne o problema

      await Mail.send('emails.forgotpassword', { name: user.name }, (message) => {
        message.to(user.email).from('oi@rocketseat.com').subject('RS/XP - Recuperação de senha')
      })

   // } catch (err) { // Teste de erro
   //   console.log('ERRO: ', err);
   // }

  }
}

module.exports = ForgotPasswordController
