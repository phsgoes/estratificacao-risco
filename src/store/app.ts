import timeout from '@/composables/UseTimeout'

// Utilities
import { defineStore } from 'pinia'

const mock = [
  {
    id: '6629e866-d208-441b-80c9-bcf0af5b1639',
    pergunta: 'Qual é a sua altura?',
    complemento: 'Medida em centímetros, por exemplo: 177cm = 1,77 cm',
    tipo: 'Numero',
    respostas: [
      {
        id: '60a44ea3-77f5-4010-826c-c094ecaa6926',
        resposta: '',
        score: 0,
      },
    ],
  },
  {
    id: 'abd83f57-c603-4c04-81a1-849b6f261d5c',
    pergunta: 'Qual é o seu peso?',
    complemento: 'Medida em quilogramas (kg)',
    tipo: 'Numero',
    respostas: [
      {
        id: 'bf2ba0e4-fb9a-4192-952b-cd1cad57a593',
        resposta: '',
        score: 0,
      },
    ],
  },
  {
    id: '33812044-c534-47b1-ae88-64c88d330451',
    pergunta: 'Você tem algum problema de saúde?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: '93011241-77a0-4dc0-8643-46ee649347c7',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: 'ba0069a8-19db-4dfc-be14-8774e9d0bfa4',
        resposta: 'Não',
        score: 1,
      },
    ],
  },
  {
    id: '21d794e2-968c-47f8-ba92-32861d93d2dd',
    pergunta: 'Possui alguma doença cardiovascular?',
    complemento: '',
    tipo: 'Multipla',
    respostas: [
      {
        id: 'b2a8843e-25b0-43e4-9165-82175587d8b3',
        resposta: 'Não',
        score: 1,
      },
      {
        id: '2a7f2bce-af8d-4c3b-a0c9-02b458bf6087',
        resposta: 'Doença coronariana (infarto ou stent)',
        score: 2,
      },
      {
        id: '41ff5ed4-6361-4e62-aad1-197504351745',
        resposta: 'Arritmia',
        score: 4,
      },
      {
        id: '41ff5ed4-6361-4e62-aad1-197534351945',
        resposta: 'Marcapasso ou CDI',
        score: 4,
      },
      {
        id: '41dfded4-6361-4e62-aad1-197534351945',
        resposta: 'Insuficiência cardíaca',
        score: 3,
      },
    ]
  },
  {
    id: 'ad7bc7f5-25a7-40b2-b3ae-50fb69acfd9c',
    pergunta: 'Sua doença coronariana está estável ou já foi tratada?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: '8a1f5c65-2b61-4561-97a7-8720cf3c7c92',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: '2b5729a8-2348-4a9e-b898-06f1e016260c',
        resposta: 'Não',
        score: 2,
      },
    ]
  },
  {
    id: 'aa7412ef-8c1c-459b-8723-164dac4876d0',
    pergunta: 'Você tem pressão alta?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: '7444bb0d-3d63-4330-a294-1bb9419f1486',
        resposta: 'Sim',
        score: 3,
      },
      {
        id: '7ac6ce77-b042-4882-b589-ebef2c286831',
        resposta: 'Não',
        score: 1,
      },
    ]
  },
  {
    id: '276522e4-b300-45c2-bd71-e10a041c2052',
    pergunta: 'Sua pressão é bem controlada?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-4306-a7e2-6a946eb638cf',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: '931b1924-d344-4714-a8f3-0962d4a82076',
        resposta: 'Não',
        score: 3,
      },
    ]
  },
  {
    id: '31d794e2-468c-47f8-ba92-32861d93d2dd',
    pergunta: 'Possui alguma doença respiratória?',
    complemento: '',
    tipo: 'Multipla',
    respostas: [
      {
        id: 'b2a8343e-25b0-43e4-9165-82175587d8b3',
        resposta: 'Não',
        score: 1,
      },
      {
        id: '2a7f2cce-af8d-4c3b-a0c9-02b458bf6087',
        resposta: 'Asma ou bronquite',
        score: 2,
      },
      {
        id: '41ff5ed4-6361-4f62-aad1-197504351745',
        resposta: 'Enfisema pulmonar (DPOC)',
        score: 4,
      },
      {
        id: '41ff5ed4-6361-4e62-aad1-19d53a351945',
        resposta: 'Apnéia do sono ou uso de CPAP',
        score: 4,
      },
      {
        id: '82deded4-6b61-4e62-aad1-197534351945',
        resposta: 'Fibrose pulmonar',
        score: 3,
      },
      {
        id: '92deded4-7b61-4e62-aad1-197534351945',
        resposta: 'Embolia pulmonar',
        score: 3,
      },
    ]
  },
  {
    id: 'a76527e4-b300-4fc2-bd71-e10a041c2052',
    pergunta: 'Atualmente você sofre de tosse?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-1306-a7e2-6a946ebd38cf',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: '931b1924-d344-4414-a8f3-096214982076',
        resposta: 'Não',
        score: 3,
      },
    ]
  },
  {
    id: 'e76827f4-c300-4fc2-bd71-e10a041c2d52',
    pergunta: 'Você consegue subir dois lances de escada, carregar compras ou limpar a casa sem se cansar?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'e0eebf10-2b53-1306-a7e2-6a946ebd38cd',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: '131b1944-d344-4414-a8f3-096214982076',
        resposta: 'Não',
        score: 3,
      },
    ]
  },
  {
    id: 'f1dc94e2-168c-47f8-ba92-32861d93d2dd',
    pergunta: 'Você atualmente sofre de alguma doença vascular (angiopatia)?',
    complemento: 'Por exemplo: trombose, aneurisma (o alargamento ou abaulamento de uma artéria), varizes, etc.',
    tipo: 'Multipla',
    respostas: [
      {
        id: 'b2a13d3e-25b0-43e4-9165-82175587d8b3',
        resposta: 'Não',
        score: 1,
      },
      {
        id: '2a7c2cce-af8d-4c3b-a0c9-02b458bf6087',
        resposta: 'Varizes',
        score: 2,
      },
      {
        id: '71de52d4-6361-4f62-aad1-197504351745',
        resposta: 'Outras (exceto varizes)',
        score: 4,
      },
    ]
  },
  {
    id: '576521e4-b300-4fc2-bd71-e10a041c2052',
    pergunta: 'Atualmente você sofre de algum problema nos rins?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-1306-a7e2-6a946e3d31cf',
        resposta: 'Sim',
        score: 2,
      },
      {
        id: 'a81b1924-d344-f4d4-a8f3-096215982076',
        resposta: 'Não',
        score: 1,
      },
    ]
  },
  {
    id: '576521e4-b300-4fc2-bd71-e10a041c2052',
    pergunta: 'Atualmente você sofre de algum problema no fígado?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-1306-a712-4a946e3d31cf',
        resposta: 'Sim',
        score: 2,
      },
      {
        id: 'a81b1924-d344-f9d4-acf3-096215982076',
        resposta: 'Não',
        score: 1,
      },
    ]
  },
  {
    id: 'f765eee4-b300-4fc2-bd71-e10a041c2052',
    pergunta: 'Você possui diabetes?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-1306-ad14-4a946e3d31cf',
        resposta: 'Sim',
        score: 2,
      },
      {
        id: 'f82b19d4-134c-f9d4-acf3-096215982076',
        resposta: 'Não',
        score: 1,
      },
    ]
  },
  {
    id: '6465fed4-b300-4fc2-bd71-e10a041c2052',
    pergunta: 'Você está atualmente fazendo uso de algum medicamento para controlar o diabetes?',
    complemento: '',
    tipo: 'Unica',
    respostas: [
      {
        id: 'f0eebf10-2b53-1306-ad14-4a946e3d41ca',
        resposta: 'Sim',
        score: 1,
      },
      {
        id: 'f82b19d4-134c-f9d4-acf3-096d1d981076',
        resposta: 'Não',
        score: 2,
      },
    ]
  },
  {
    id: 'f8dc14ed-1f8c-87f8-ba92-32861d93d2de',
    pergunta: 'Você atualmente sofre ou já sofreu no passado, de alguma doença do sistema nervoso ou do cérebro?',
    complemento: 'Por exemplo: um acidente vascular cerebral (AVC), epilepsia, esclerose múltipla (EM), distúrbio muscular, doença de Parkinson, hérnia, etc.',
    tipo: 'Multipla',
    respostas: [
      {
        id: '82a13d3e-2db0-43e4-9165-82175587d8b4',
        resposta: 'Não',
        score: 1,
      },
      {
        id: '1a7f2dce-af8d-4c3b-a0c9-02b458bf6087',
        resposta: 'Epilepsia',
        score: 2,
      },
      {
        id: '81de42d4-6361-ef62-aad1-1975a4351745',
        resposta: 'Acidente vascular cerebral (AVC)',
        score: 4,
      },
      {
        id: 'b1ce42d4-c361-af62-aad1-1975a4351745',
        resposta: 'Outras',
        score: 2,
      },
    ]
  },
]

export const useAppStore = defineStore('app', {
  state: () => ({
    formFilling: false,
    formDone: false,
    step: 0,
    questions: [] as any,
    paciente: 'José Carlos Miguel Coutinho',
  }),

  getters: {
    completed: (state) => (state.step / state.questions.length) * 100 || 0
  },

  actions: {
    startFillingOutTheForm() {
      this.formFilling = true
    },

    finishFillingOutTheForm() {
      this.formFilling = false
    },

    nextStep() {
      if (this.step <= this.questions.length - 1) this.step++
      if (this.step === this.questions.length) {
        this.formDone = true
        this.formFilling = false
      }
    },

    prevStep() {
      if (this.step > 0) this.step--
    },

    async getAllQuestions() {
      await timeout(2000)
      const formattedAnswers = mock.map((e: any) => {
        if (e.tipo === 'Multipla') {
          e.respostas.map((a: any) => {
            a.selected = false
            return a
          })
        }
        return e
      })
      this.questions = [...formattedAnswers]
    }
  },
})
