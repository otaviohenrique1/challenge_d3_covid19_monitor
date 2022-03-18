import * as Yup from "yup";

export const valoresIniciais: FormTypes = {
  termo: "",
};

const mensagem_valor_minimo = 'Valor minimo aceito é 0';
const mensagem_campo_vazio = 'Campo vazio';


export const validacaoSchema = Yup.object().shape({
  termo: Yup.string().min(0, mensagem_valor_minimo).required(mensagem_campo_vazio),
});