      let arrayAlunos = [];
      let indiceSelecionado = -1;
      let modoEdicao = false;

      function remove (indice){
         arrayAlunos.splice(indice,1);

         if(indice == indiceSelecionado){
            deletar();
         }

         redesenha();
      }

      function deletar(){
         document.getElementById("editNome").innerHTML = "";
         document.getElementById("editTelefone").innerHTML = "";
         document.getElementById("editDataNascimento").innerHTML = "";
         document.getElementById("editNotaFinalCurso").innerHTML = "";
         indiceSelecionado = -1;
         document.getElementById("idBotaoEditarCadastro").style.display = "none";
      }

      function exibir(indice){
         document.getElementById("idBotaoEditarCadastro").style.display = "block";
         indiceSelecionado = indice;
         document.getElementById("editNome").innerHTML = arrayAlunos[indice].nome;
         document.getElementById("editTelefone").innerHTML = arrayAlunos[indice].telefone;
         document.getElementById("editDataNascimento").innerHTML = arrayAlunos[indice].datanascimento;
         document.getElementById("editNotaFinalCurso").innerHTML = arrayAlunos[indice].notafinalcurso;
         modoEdicao = false;
         document.getElementById("idBotaoEditarCadastro").innerHTML = "Editar Cadastro";
      }

	  	function redesenha(){
	  		let alunos = "<tr><td></td><td>Nome</td><td>Telefone</td><td>Data de Nascimento</td><td>Nota Final do Curso</td><td></td></tr>";
         let i = 0;
	  		for(dado of arrayAlunos){
	  			alunos += "<tr><td><button onclick='exibir("+ i +")'>Editar</button></td><td>" + dado.nome + "</td><td>" + dado.telefone + "</td><td>" + dado.datanascimento + "</td><td>" + dado.notafinalcurso + "</td><td><button onclick='remove("+ i +")'>Remover</button></td></tr>";
            i++;
	  		}
	  		document.getElementById("idTabelaDados").innerHTML = alunos;
	  	}

        function cadastrarAluno(){
        	let nome = document.getElementById("idNome").value;
            let telefone = document.getElementById("idTelefone").value;
            let datanascimento = document.getElementById("idDataNascimento").value;
            let notafinalcurso = document.getElementById("idNotaFinalCurso").value;

            let aluno = {nome:nome, telefone:telefone, datanascimento:datanascimento, notafinalcurso:notafinalcurso};

        	arrayAlunos.push(aluno);
        	redesenha();
         alert("Aluno cadastrado com sucesso.");
        }

        function editar(){

          if(!modoEdicao){
           document.getElementById("editNome").innerHTML = "<input id='inputNome' value= '"+  arrayAlunos[indiceSelecionado].nome + "'>";
         document.getElementById("editTelefone").innerHTML = "<input id='inputTelefone' value= '"+ arrayAlunos[indiceSelecionado].telefone + "'>";
         document.getElementById("editDataNascimento").innerHTML = "<input id='inputDataNascimento' value= '"+ arrayAlunos[indiceSelecionado].datanascimento + "'>";
         document.getElementById("editNotaFinalCurso").innerHTML = "<input id='inputNotaFinalCurso'value= '"+ arrayAlunos[indiceSelecionado].notafinalcurso + "'>";
         document.getElementById("idBotaoEditarCadastro").innerHTML = "Confirmar Edição";
          modoEdicao = true;
          } else {
              arrayAlunos[indiceSelecionado].nome = document.getElementById("inputNome").value;
              arrayAlunos[indiceSelecionado].telefone = document.getElementById("inputTelefone").value;
              arrayAlunos[indiceSelecionado].datanascimento = document.getElementById("inputDataNascimento").value;
              arrayAlunos[indiceSelecionado].notafinalcurso = document.getElementById("inputNotaFinalCurso").value;
              document.getElementById("idBotaoEditarCadastro").innerHTML = "Editar Cadastro";
              exibir(indiceSelecionado);
              redesenha();
          }

        }
