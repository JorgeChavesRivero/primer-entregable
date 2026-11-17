const formateadorCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export const formatearPrecio = (valor) => formateadorCOP.format(valor);