import React from "react";
import html2pdf from "html2pdf.js";

export default function Curriculo({ targetRef, fileName = "document.pdf" }) {
	function handleDownload() {
		if (!targetRef.current) {
			console.error("Elemento para gerar PDF não encontrado.");
			return;
		}

		const htmlElement = document.documentElement;
		const isDarkMode = htmlElement.classList.contains("dark");

		// Armazena as classes e variáveis de cor originais para restauração
		const originalHtmlClasses = htmlElement.className;

		// Remove a classe 'dark' e qualquer outra classe de tema que possa usar oklch
		htmlElement.classList.remove("dark");

		// html2pdf não entende a função oklch. A solução é sobrescrever as cores com um valor seguro.
		// Esta é a parte crítica para resolver o erro.
		const originalStyle = htmlElement.getAttribute("style");
		htmlElement.style.cssText = `
      --tw-color-pink: #ec4899; 
      --tw-color-gray: #1f2937;
    `;

		html2pdf()
			.set({
				margin: 0.5,
				filename: fileName,
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: { scale: 2 },
				jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
			})
			.from(targetRef.current)
			.save()
			.catch((err) => console.error("Erro ao gerar PDF:", err))
			.finally(() => {
				// Restaura as classes e estilos originais, mesmo se houver erro
				htmlElement.className = originalHtmlClasses;
				if (originalStyle) {
					htmlElement.setAttribute("style", originalStyle);
				} else {
					htmlElement.removeAttribute("style");
				}
			});
	}

	return (
		<button
			onClick={handleDownload}
			className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition">
			Baixar Currículo (PDF)
		</button>
	);
}
