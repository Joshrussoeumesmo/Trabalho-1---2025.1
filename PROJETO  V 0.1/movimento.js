document.addEventListener('DOMContentLoaded', function() {
    const filmes = document.querySelectorAll('.filme');
    const modal = document.getElementById('modal-filme');
    const infoFilme = document.getElementById('info-filme');

    filmes.forEach(filme => {
        filme.addEventListener('click', function() {
            const filmeId = this.dataset.filmeId;
            exibirInformacoesFilme(filmeId);
            modal.style.display = 'block';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function exibirInformacoesFilme(filmeId) {
        const informacoes = {
            1: {
                titulo: 'Pulp Fiction: Tempo de Violência',
                ano: '1994',
                duracao: '2 h 34 min',
                classificacao: '18',
                notaIMDB: '8,9/10 (2,3mi)',
                sinopse: 'As vidas de dois assassinos da máfia, um boxeador, um gângster e sua esposa, e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.',
                diretor: 'Quentin Tarantino',
                atores: 'John Travolta, Uma Thurman, Samuel L. Jackson'
            },
            2: {
                titulo: 'Mad Max: Estrada da Fúria',
                ano: '2015',
                duracao: '2 h',
                classificacao: '16',
                notaIMDB: '8,1/10 (1,2mi)',
                sinopse: 'Em um mundo pós-apocalíptico, uma mulher se rebela contra um governante tirânico em busca de sua terra natal com a ajuda de um grupo de prisioneiras, um adorador psicótico e um nômade chamado Max.',
                diretor: 'George Miller',
                atores: 'Tom Hardy, Charlize Theron, Nicholas Hoult'
            },
            3: {
                titulo: 'John Wick - De Volta ao Jogo',
                ano: '2014',
                duracao: '1 h 41 min',
                classificacao: '16',
                notaIMDB: '7,5/10 (775 mil)',
                sinopse: 'John Wick é um ex-assassino de aluguel em luto por perder seu grande amor. Quando invadem sua casa, o roubam e matam seu cachorro, ele é forçado a voltar à ativa para se vingar.',
                diretor: 'Chad Stahelski',
                atores: 'Keanu Reeves, Michael Nyqvist, Alfie Allen'
            },
            4: {
                titulo: 'O Exterminador do Futuro 2: O Julgamento Final',
                ano: '1991',
                duracao: '2 h 17 min',
                classificacao: '14',
                notaIMDB: '8,6/10 (1,2 mi)',
                sinopse: 'Um ciborgue, idêntico ao que falhou em matar Sarah Connor, agora deve proteger o filho de dez anos dela, John, de um ciborgue ainda mais avançado e poderoso.',
                diretor: 'James Cameron',
                atores: 'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong'
            },
            5: {
                titulo: 'Duro de Matar',
                ano: '1988',
                duracao: '2 h 12 min',
                classificacao: '14',
                notaIMDB: '8,2/10 (986 mil)',
                sinopse: 'John McClane, agente do departamento de polícia de Nova York, tenta salvar sua esposa, Holly Gennaro, e outras pessoas que o terrorista alemão Hans Gruber tomou como reféns durante a festa de Natal no Nakatomi Plaza, em Los Angeles.',
                diretor: 'John McTiernan',
                atores: 'Bruce Willis, Alan Rickman, Bonnie Bedelia'
            },
            6: {
                titulo: 'Onde os Fracos Não Têm Vez',
                ano: '2007',
                duracao: '2 h 2 min',
                classificacao: '16',
                notaIMDB: '8,2/10 (1,1 mi)',
                sinopse: 'Violência e caos surgem quando um caçador se depara com uma negociação de drogas que deu errado e mais de dois milhões de dólares perto do Rio Grande.',
                diretor: 'Ethan Coen, Joel Coen',
                atores: 'Tommy Lee Jones, Javier Bardem, Josh Brolin'
            },
            7: {
                titulo: 'Missão: Impossível - Efeito Fallout',
                ano: '2022',
                duracao: '2 h 27 min',
                classificacao: '14',
                notaIMDB: '7,7/10 (393 mil)',
                sinopse: 'Ethan Hunt e sua equipe, juntamente com alguns aliados próximos, correm contra o tempo após uma missão ter dado errado.',
                diretor: 'Christopher McQuarrie',
                atores: 'Tom Cruise, Henry Cavill, Ving Rhames'
            },
            8: {
                titulo: 'Kill Bill: Volume 1',
                ano: '2003',
                duracao: '1 h 51 min',
                classificacao: '18',
                notaIMDB: '8,2/10 (1,2 mi)',
                sinopse: 'Depois de despertar de um coma de quatro anos, uma antiga assassina busca vingança contra o grupo de assassinos que a traiu.',
                diretor: 'Quentin Tarantino',
                atores: 'Uma Thurman, David Carradine, Daryl Hannah'
            },
            9: {
                titulo: 'Os Infiltrados',
                ano: '2006',
                duracao: '2 h 31 min',
                classificacao: '18',
                notaIMDB: '8,5/10 (1,5 mi)',
                sinopse: 'Um policial disfarçado e um espião estão tentando se identificar enquanto se infiltram em uma gangue irlandesa no sul de Boston.',
                diretor: 'Martin Scorsese',
                atores: 'Leonardo DiCaprio, Matt Damon, Jack Nicholson'
            },
            10: {
                titulo: 'Oldboy',
                ano: '2003',
                duracao: '2 h',
                classificacao: '16',
                notaIMDB: '8,3/10 (674 mil)',
                sinopse: 'Depois de ter sido raptado e preso por quinze anos, Oh Dae-Su é libertado, e descobre que tem 5 dias para encontrar seu sequestrador.',
                diretor: 'Park Chan-wook',
                atores: 'Choi Min-sik, Yoo Ji-tae, Kang Hye-jung'
            },
            11: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            12: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            13: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            14: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            15: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            16: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            17: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            18: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            19: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            20: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            21: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            22: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            23: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            24: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            25: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            26: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            27: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            28: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            29: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            },
            30: {
                titulo: '',
                ano: '',
                duracao: '',
                classificacao: '',
                notaIMDB: '',
                sinopse: '',
                diretor: '',
                atores: ''
            }
        };

        infoFilme.innerHTML = `
            <h3>${informacoes[filmeId].titulo}</h3>
            <p><strong>Ano:</strong> ${informacoes[filmeId].ano}</p>
            <p><strong>Duração:</strong> ${informacoes[filmeId].duracao}</p>
            <p><strong>Classificação:</strong> ${informacoes[filmeId].classificacao}</p>
            <p><strong>Nota IMDb:</strong> ${informacoes[filmeId].notaIMDB}</p>
            <p><strong>Sinopse:</strong> ${informacoes[filmeId].sinopse}</p>
            <p><strong>Diretor:</strong> ${informacoes[filmeId].diretor}</p>
            <p><strong>Atores:</strong> ${informacoes[filmeId].atores}</p>
        `;
    }
});