import './VerticalSection.css';

const VerticalSection = ({ children, backgroundColor, textColor = 'white', className = '' }) => {
  return (
    <section
      className={`vertical-section ${className}`}
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div className="vertical-content">
        {children}
      </div>
    </section>
  );
};

export default VerticalSection;
