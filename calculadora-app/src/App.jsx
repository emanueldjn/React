import "./App.css";
import { useState } from "react";
import { Botao } from "./components/Botao/Botao";
import { BotaoZero } from "./components/BotaoZero/BotaoZero";

function App() {
  // Declara os estados do componente para armazenar números e símbolos.
  const [numeroUm, setNumeroUm] = useState(""); // Armazena o número atual que está sendo digitado.
  const [simbolo, setSimbolo] = useState(""); // Armazena o símbolo da operação matemática.
  const [numeroDois, setNumeroDois] = useState(""); // Armazena o número com o qual o número atual está sendo operado.

  // Função para adicionar um número ao número atual (numeroUm).
  function adicionarNumero(n) {
    let num = numeroUm + n; // Concatena o número clicado com o valor atual.
    setNumeroUm(num); // Atualiza o estado numeroUm.
  }

  // Função para realizar a operação matemática com base no símbolo selecionado.
  function conta(sinal) {
    if (numeroUm !== "" && numeroDois !== "") {
      // Se ambos os números estiverem preenchidos, realiza a operação.
      if (simbolo === "/") {
        setNumeroDois(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (simbolo === "*") {
        setNumeroDois(parseFloat(numeroDois) * parseFloat(numeroUm));
      } else if (simbolo === "-") {
        setNumeroDois(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (simbolo === "+") {
        setNumeroDois(parseFloat(numeroDois) + parseFloat(numeroUm));
      }
      setSimbolo(sinal); // Atualiza o símbolo da operação.
      setNumeroUm(""); // Limpa o número atual para a próxima entrada.
    } else {
      setSimbolo(sinal); // Define o símbolo da nova operação.
      setNumeroDois(numeroUm); // Define o primeiro número para númeroDois.
      setNumeroUm(""); // Limpa o número atual.
    }
  }

  // Função para calcular o resultado da operação matemática.
  function resultado() {
    if (numeroUm !== "" && numeroDois !== "" && simbolo !== "=") {
      // Se ambos os números e o símbolo estiverem preenchidos, realiza a operação.
      if (simbolo === "/") {
        setNumeroUm(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (simbolo === "*") {
        setNumeroUm(parseFloat(numeroDois) * parseFloat(numeroUm));
      } else if (simbolo === "-") {
        setNumeroUm(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (simbolo === "+") {
        setNumeroUm(parseFloat(numeroDois) + parseFloat(numeroUm));
      }
      setNumeroDois(""); // Limpa númeroDois após o cálculo.
      setSimbolo("="); // Define o símbolo como "=" para indicar o fim da operação.
    }
  }

  // Função para limpar o número atual (numeroUm).
  function limpar() {
    setNumeroUm(""); // Limpa o valor de numeroUm.
  }

  // Função para limpar todos os estados (numeroUm, numeroDois, simbolo).
  function limparTudo() {
    setNumeroUm(""); // Limpa numeroUm.
    setNumeroDois(""); // Limpa numeroDois.
    setSimbolo(""); // Limpa simbolo.
  }

  // Função para calcular a porcentagem do valor atual em relação ao número armazenado.
  function porcentagem() {
    let p = (parseFloat(numeroUm) / 100) * parseFloat(numeroDois); // Calcula a porcentagem.
    setNumeroUm(p.toString()); // Atualiza numeroUm com o resultado.
  }

  // Função para adicionar um ponto decimal ao número atual, se não houver um.
  function adicionarPonto() {
    if (numeroUm === "") {
      setNumeroUm("0."); // Adiciona um ponto inicial se numeroUm estiver vazio.
    } else if (!numeroUm.includes(".")) {
      let num = numeroUm + "."; // Adiciona um ponto se ainda não houver um.
      setNumeroUm(num);
    }
  }

  return (
    <div className="content">
      {/* Contêiner principal da calculadora */}
      <div className="calculadora">
        <div className="calculadoraHeader">
          {/* Exibe a equação e a solução na tela */}
          <p className="equacao">{numeroDois}</p>
          <p className="solucao">
            {simbolo} {numeroUm}
          </p>
        </div>
        <div className="botoes">
          {/* Botões da calculadora organizados em linhas */}
          <div className="linhas">
            {/* Botão para limpar o número atual */}
            <Botao
              text={"CE"}
              background={"#616161"}
              color={"#A5A5A5"}
              onClick={() => limpar()}
            />
            {/* Botão para limpar tudo */}
            <Botao
              text={"C"}
              background={"#616161"}
              color={"#A5A5A5"}
              onClick={() => limparTudo()}
            />
            {/* Botão para calcular a porcentagem */}
            <Botao
              text={"%"}
              background={"#616161"}
              color={"#A5A5A5"}
              onClick={() => porcentagem()}
            />
            {/* Botão para a operação de divisão */}
            <Botao
              text={"/"}
              background={"#005DB2"}
              color={"#FFFF"}
              onClick={() => conta("/")}
            />
          </div>
          <div className="linhas">
            {/* Botões numéricos */}
            <Botao
              text={"7"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(7)}
            />
            <Botao
              text={"8"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(8)}
            />
            <Botao
              text={"9"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(9)}
            />
            {/* Botão para a operação de multiplicação */}
            <Botao
              text={"X"}
              background={"#005DB2"}
              color={"#FFFF"}
              onClick={() => conta("*")}
            />
          </div>
          <div className="linhas">
            {/* Botões numéricos */}
            <Botao
              text={"4"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(4)}
            />
            <Botao
              text={"5"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(5)}
            />
            <Botao
              text={"6"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(6)}
            />
            {/* Botão para a operação de subtração */}
            <Botao
              text={"-"}
              background={"#005DB2"}
              color={"#FFFF"}
              onClick={() => conta("-")}
            />
          </div>
          <div className="linhas">
            {/* Botões numéricos */}
            <Botao
              text={"1"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(1)}
            />
            <Botao
              text={"2"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(2)}
            />
            <Botao
              text={"3"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(3)}
            />
            {/* Botão para a operação de adição */}
            <Botao
              text={"+"}
              background={"#005DB2"}
              color={"#FFFF"}
              onClick={() => conta("+")}
            />
          </div>
          <div className="linhas">
            {/* Botão para o número zero e outros botões */}
            <BotaoZero
              text={"0"}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarNumero(0)}
            />
            {/* Botão para adicionar um ponto decimal */}
            <Botao
              text={"."}
              background={"#616161"}
              color={"#FFFF"}
              onClick={() => adicionarPonto()}
            />
            {/* Botão para calcular o resultado */}
            <Botao
              text={"="}
              background={"#005DB2"}
              color={"#FFFF"}
              onClick={() => resultado()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente App como o componente padrão do módulo.
export default App;
