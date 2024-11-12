import './Header.css';

const Header = ({ today }) => {
  // Criação de uma nova data com o valor de today
  const date = new Date(today);

  // Mapeamento dos meses em português
  const formatMonths = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Extração do dia, mês e ano
  const day = date.getDate();
  const month = formatMonths[date.getMonth()];
  const year = date.getFullYear();

  return (
      <header>
        <h1>Nutri News</h1>
        <p>Principais notícias de nutrição para hoje, {`${day} de ${month} de ${year}`}</p>
      </header>
  );
};

export default Header;
