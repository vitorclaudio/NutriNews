// Importação das imagens da pasta 'src/images'
import vegetaisFrescos from './Images/Vegetais Frescos.jpg';
import superalimentos from './Images/Variedade de Superalimentos.jpg';
import copoAgua from './Images/Copo de Água.jpg';
import smoothieVerde from './Images/Smoothie Verde.jpg';
import fibras from './Images/Alimentos Ricos em Fibras.jpg';
import jantarVegano from './Images/Jantar Vegano.jpg';
import alimentosCerebro from './Images/Alimentos para o Cérebro.jpg';
import probioticos from './Images/Iogurte com Probióticos.jpg';
import alimentosSono from './Images/Alimentos para Melhorar o Sono.jpg';
import dietaCetogenica from './Images/Dieta Cetogênica.jpg';


const mockArticles = [
    {
        title: "Os Benefícios da Dieta à Base de Plantas",
        abstract: "Descubra como uma dieta à base de plantas pode melhorar sua saúde, reduzir a inflamação e promover a longevidade.",
        byline: "Por Gyovanna Borges",
        section: "Nutrição",
        subsection: "Alimentação Saudável",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: vegetaisFrescos, caption: "Vegetais Frescos" }
        ],
        updated_date: "11-11-2024"
    },
    {
        title: "10 Superalimentos para Fortalecer o Sistema Imunológico",
        abstract: "Conheça os superalimentos que podem fortalecer seu sistema imunológico, especialmente durante a temporada de gripes.",
        byline: "Por Gyovanna Borges",
        section: "Nutrição",
        subsection: "Superalimentos",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: superalimentos, caption: "Variedade de Superalimentos" }
        ],
        updated_date: "10-11-2024"
    },
    {
        title: "Dicas de Hidratação: Quanto de Água Você Precisa?",
        abstract: "Manter-se hidratado é essencial para a saúde. Descubra quanto de água você deve beber diariamente.",
        byline: "Por Gyovanna Borges",
        section: "Hidratação",
        subsection: "Vida Saudável",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: copoAgua, caption: "Copo de Água" }
        ],
        updated_date: "09-11-2024"
    },
    {
        title: "5 Receitas de Smoothies para um Café da Manhã Saudável",
        abstract: "Experimente essas deliciosas receitas de smoothies para começar o dia com energia.",
        byline: "Por Gyovanna Borges",
        section: "Receitas",
        subsection: "Smoothies",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: smoothieVerde, caption: "Smoothie Verde" }
        ],
        updated_date: "08-11-2024"
    },
    {
        title: "A Importância das Fibras na Dieta",
        abstract: "Saiba como as fibras podem melhorar sua digestão e prevenir doenças.",
        byline: "Por Gyovanna Borges",
        section: "Saúde Intestinal",
        subsection: "Alimentação",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: fibras, caption: "Alimentos Ricos em Fibras" }
        ],
        updated_date: "07-11-2024"
    },
    {
        title: "Receitas Veganas para o Jantar: Deliciosas e Nutritivas",
        abstract: "Descubra receitas veganas que são saudáveis e fáceis de preparar para o jantar.",
        byline: "Por Gyovanna Borges",
        section: "Receitas",
        subsection: "Vegan",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: jantarVegano, caption: "Jantar Vegano" }
        ],
        updated_date: "06-11-2024"
    },
    {
        title: "Como a Alimentação Afeta sua Saúde Mental",
        abstract: "Estudos mostram que uma alimentação balanceada pode melhorar seu humor e reduzir a ansiedade.",
        byline: "Por Gyovanna Borges",
        section: "Saúde Mental",
        subsection: "Nutrição",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: alimentosCerebro, caption: "Alimentos para o Cérebro" }
        ],
        updated_date: "05-11-2024"
    },
    {
        title: "A Importância dos Probióticos para a Saúde Intestinal",
        abstract: "Probióticos são essenciais para um intestino saudável e para fortalecer o sistema imunológico.",
        byline: "Por Gyovanna Borges",
        section: "Saúde Intestinal",
        subsection: "Probióticos",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: probioticos, caption: "Iogurte com Probióticos" }
        ],
        updated_date: "04-11-2024"
    },
    {
        title: "Alimentos que Ajudam a Melhorar o Sono",
        abstract: "Descubra quais alimentos podem ajudá-lo a ter uma noite de sono mais tranquila.",
        byline: "Por Gyovanna Borges",
        section: "Vida Saudável",
        subsection: "Sono",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: alimentosSono, caption: "Alimentos para Melhorar o Sono" }
        ],
        updated_date: "03-11-2024"
    },
    {
        title: "Desvendando Mitos sobre a Dieta Cetogênica",
        abstract: "Saiba a verdade por trás da dieta cetogênica e se ela é realmente eficaz.",
        byline: "Por Gyovanna Borges",
        section: "Dietas",
        subsection: "Cetogênica",
        short_url: "https://www.instagram.com/gyovanna__bs/",
        multimedia: [
            { url: dietaCetogenica, caption: "Dieta Cetogênica" }
        ],
        updated_date: "02-11-2024"
    }
];

export default mockArticles;
