import Head from "next/head";
import styles from "../styles/Home.module.css";

// Enunciado:

// Haz una web simulador de cuota de hipoteca. Para ello, el usuario proporcionará: cantidad (€), número de cuotas (meses) y tipo de interés (%). La página devolverá el importe de la cuota mensual.

// Opcional: puedes usar un slider en el número de cuotas y en el tipo de interés.

// Consideraciones: Debemos poder probar el ejercicio, ya sea con jsfiddle, stackblitz o publicado en algún sitio.

export default function Home() {
  function calculateMonthlyPayment(amount, months, interest) {
    //validar que los datos sean correctos
    if (amount <= 0 || months <= 0 || interest <= 0) {
      return "Introduzca un monto valido";
    }
    const monthlyInterest = interest / 100 / 12;
    const monthlyPayment = amount * monthlyInterest / (1 - Math.pow(1 / 1 + monthlyInterest, -months));
    //retornar el mensaje con el resultado
    return `El importe mensual es de ${monthlyPayment.toFixed(2)}€`;
  }
  return (
    //div que abarque el 100% de la pantalla
    <div className={styles.container}>
      <Head>
        <title>Hipoteca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hipoteca</h1>
        <p className={styles.description}>
          Proporciona cantidad, número de cuotas y tipo de interés.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <h3>Cantidad</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    name="cantidad"
                    id="cantidad"
                    className={styles.input}
                    placeholder="0.00€"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <h3>Número de cuotas</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    name="cuotas"
                    id="cuotas"
                    className={styles.input}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <h3>Tipo de interés</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    name="interes"
                    id="interes"
                    className={styles.input}
                    placeholder="0.00%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          <button
            className="p-3 m-7 rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            onClick={() => {
              const amount = document.getElementById("cantidad").value;
              const months = document.getElementById("cuotas").value;
              const interest = document.getElementById("interes").value;
              const monthlyPayment = calculateMonthlyPayment(
                amount,
                months,
                interest
              );
              alert(`${monthlyPayment}`);
            }
            }
          >
            Calcular
          </button>
      </main>
    </div>
  );
}
