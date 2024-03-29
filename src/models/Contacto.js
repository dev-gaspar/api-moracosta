import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema({
  modelo: { type: mongoose.Schema.Types.ObjectId, ref: "Vehiculo" },
  nombre: String,
  apellido: String,
  tipoDocumento: String,
  numeroDocumento: String,
  correo: String,
  telefono: String,
  direccion: String,
  ciudad: String,
  agencia: String,
  check: {
    whatsapp: { type: Boolean, default: false },
    llamada: { type: Boolean, default: false },
  },
  isAtendido: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Contacto = mongoose.model("Contacto", contactoSchema);

export default Contacto;
