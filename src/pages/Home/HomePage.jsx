import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
      </div>
    </section>
  );
};

export default HomePage;
