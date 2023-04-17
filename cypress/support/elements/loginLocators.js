class loginLocators {
    // os elementos ficam aqui dentro:
    FIELD_EMAIL = () => {return "//*[@placeholder = 'Email']" }
    FIELD_SENHA = () => {return "//*[@placeholder = 'Senha']"}
    BTN_ENTRAR = () => {return "//button[@type='submit']"}

}


export default loginLocators