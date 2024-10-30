import "../stylesheets/Testimonio.css";

const Testimonio = ({imagen, nombre, pais, cargo, empresa, testimonio}) => {
  return (
    <div className="contenedor-testimonios">
      <img
        className="img-testimonios"
        src={`${imagen}`}
        alt="Foto de Emma"
      />

      <div className="contenedor-txt-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className="txt-testimonio">{testimonio}</p>
      </div>
    </div>
  );
}
export default Testimonio;
