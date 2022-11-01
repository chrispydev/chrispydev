interface props {
  active: string;
}

const NavigationDots: props = ({ active }: string) => {
  return (
    <div className='app_navgation'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            key={index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : undefined}
            href={`#${item}`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
