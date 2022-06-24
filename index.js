async function trava(textToSpamming) {
  const lines = textToSpamming.split(/[\n\t]+/).map(line => line.trim()).filter(line => line)
  const tagMainWhatsApp = document.querySelector("#main")
  const inputMensage = tagMainWhatsApp.querySelector(`div[contenteditable="true"]`)

  if (!inputMensage) throw new Error("Você tem que estar com uma conversa aberta para usar o script")

  for (const line of lines) {
    console.log(line)

    inputMensage.textContent = line
    inputMensage.dispatchEvent(new InputEvent("input", { bubbles: true }));

    (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()

    if (lines.indexOf(line) !== lines.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 250))
    }
  }

  return lines.length
}

trava(`
só inserir o texto que deseja
aqui, te aconselho a usar
um livro inteiro ou roteiro de filme
`)
