//criação do enum
enum TipoDeUsuario {

    Professor,
    
    Aluno,
    
    Convidado,
    
}
 
//criação da função de verificar a permissão
function verificarPermissao(usuario: TipoDeUsuario): void {

    switch(usuario) {
        case TipoDeUsuario.Professor:
            console.log('Seja bem-vindo à sua área de trabalho, professor!');
            break;
        case TipoDeUsuario.Aluno:
            console.log('Seja bem-vindo à sala virtual de aprendizagem, aluno!');
            break;
        case TipoDeUsuario.Convidado:
            console.log('ERRO: convidado não tem permissão para acessar a plataforma.');
            break;
        default:
            console.log('ERRO: usuário inválido!');
            break;
    }
    
}

//chamando a função
verificarPermissao(TipoDeUsuario.Aluno);

