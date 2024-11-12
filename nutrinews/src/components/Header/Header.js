import './Header.css';

const Header = ({ today }) => {
  const month = today.split(' ').slice(1, 2);
  let numDate = today.split(' ').slice(2).join(', ');
  const formatMonths = {
    'Jan': 'Janeiro',
    'Feb': 'Fevereiro',
    'Mar': 'Março',
    'Apr': 'Abril',
    'May': 'Maio',
    'Jun': 'Junho',
    'Jul': 'Julho',
    'Aug': 'Agosto',
    'Sep': 'Setembro',
    'Oct': 'Outubro',
    'Nov': 'Novembro',
    'Dec': 'Dezembro'
  };

  if (numDate.charAt(0) === '0') {
    numDate = numDate.slice(1);
  }

  return (
      <header>
        <h1>Nutri News</h1>
        <p>Principais notícias de nutrição para hoje, {formatMonths[month] + ' ' + numDate}</p>
      </header>
  );
};

export default Header;
