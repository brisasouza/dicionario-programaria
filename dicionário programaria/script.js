

function carregaDicionario() {
                  var biografias = {
                    bio01: {
                      nome: "Ararajuba",
                    imagem: "https://static.todamateria.com.br/upload/ar/ar/ararajubaguarubaguarouba-cke.jpg",
                    descricao:"A ararajuba (Guaruba guarouba), também conhecida como Guaruba, é uma ave verde e amarela, que existe somente na Amazônia e vem sofrendo com o tráfico e o desmatamento do bioma.Pouco se sabe sobre os hábitos da ararajuba, o que dificulta a sua conservação. Atualmente, segundo o Livro Vermelho do ICMBio (2016), ela é considerada em risco vulnerável de extinção.",
                    citacao:"em risco"
                  },
              bio02: { 
                  nome: "Ariranha",
                    imagem:"https://static.todamateria.com.br/upload/ar/ir/ariranha-cke.jpg?auto_optimize=low",
                    descricao:"A ariranha (Pteronura brasiliensis), também conhecida como lobo do rio ou lontra gigante, pode ser encontrada no Pantanal e Amazônia. Está ameaçada de extinção em risco vulnerável, conforme apresentado pelo Livro Vermelho do ICMBio (2016).A pesca predatória, caça ilegal e a poluição dos rios, principalmente a contaminação por mercúrio, são as maiores ameaças para a conservação da espécie.",
                    citacao:"ameaçada"
                 },
                    
              bio03: { 
              nome: "Baleia-Franco-do Sul",
              imagem: "https://static.todamateria.com.br/upload/ba/le/baleiafrancadosul.jpg?auto_optimize=low",
              descricao:"A baleia-franco-do sul (Eubalaena australis), também conhecida como baleia franca austral, é encontrada no litoral brasileiro. Ela vem sofrendo com a caça, a pesca, bem como a poluição das águas.Na época de ter os filhotes, as mães buscam águas mais quentes e rasas para darem à luz. É considerada em perigo de extinção, segundo o Livro Vermelho do ICMBio (2016).",
              citacao:"perigo de extinção"

                    },

              bio04: { 
                  nome: "Boto-Cor-de-Rosa",
                    imagem: "https://static.todamateria.com.br/upload/bo/to/botocorderosa-0-cke.jpg?auto_optimize=low",
                    descricao:"O boto-cor-de-rosa (Inia geoffrensis) é endêmico dos rios da bacia Amazônia, sendo considerado o maior golfinho de água doce e conhecido pela lenda de que ele seduz moças solteiras.A população do boto-cor-de-rosa vem diminuindo com o passar do tempo, pois a espécie já foi utilizada como isca para pesca e, mais atualmente, sofre com a construção de hidrelétricas.Pesquisadores estimam que em cerca de 30 anos, a população desta espécie poderá sofrer um declínio de 50%. Por esse motivo, ela foi categorizada em perigo de extinção pelo ICMBio (2016).",
                    citacao:"perigo de extinção"
                  },
              
              bio05: {
                  nome: "Cervo-do-Pantanal",
                  imagem: "https://static.todamateria.com.br/upload/ce/rv/cervodopantanal-cke.jpg?auto_optimize=low",
                  descricao:"O cervo-do-pantanal (Blastocerus dichotomus) é o maior cervídeo da América da Sul. Além de ser encontrado no Pantanal, esta espécie vive também nos biomas Amazônia e Cerrado.O desmatamento e a caça ilegal são ameaças, além da construção de hidrelétricas na bacia do Rio Paraná. Essas têm contribuído para a grande redução da espécie, classificando-a em risco vulnerável de extinção, de acordo com o Livro Vermelho do ICMBio (2016).",
                  citacao:" risco vulnerável de extinção"
                   },
               
                  bio06: {
                  nome: "Cuxiú-Preto",
                  imagem: "https://static.todamateria.com.br/upload/cu/xi/cuxiupretochiropotessatanas-cke.jpg?auto_optimize=low",
                  descricao:"O cuxiú-preto (Chiropotes satanas) é um mamífero que pode ser encontrado na Amazônia.Esta espécie de macaco vem sofrendo com a caça predatória e desmatamento do seu habitat, causando assim escassez de alimentos, já que os frutos das árvores são fundamentais para sua sobrevivência.Atualmente, está classificada como criticamente ameaçada de extinção pelo Livro Vermelho do ICMBio (2016).",
                  citacao:" ameaçada de extinção"
                  }, 

                  };
              
              var content = document.getElementById("content");
              
              for (var bio in biografias) {
                  content.innerHTML +=
                    '<div class="card">' +
                    '<img src="' +
                    biografias[bio].imagem +
                    '"/>' +
                    "<details>" +
                    "<summary>" +
                    biografias[bio].nome +
                    "</summary>" +
                    "<p>" +
                    biografias[bio].descricao +
                    "</p>" +
                    "<blockquote><q>" +
                    biografias[bio].citacao +
                    "</q></blockquote>" +
                    "</details></div>";
                }
              
                  }
              carregaDicionario();