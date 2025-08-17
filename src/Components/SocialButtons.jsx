import {
	LinkedinLogoIcon,
	GithubLogoIcon,
	WhatsappLogoIcon,
	EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

export default function SocialButtons({
	github = "https://github.com/Aanastc",
	linkedin = "https://www.linkedin.com/in/analetíciaac",
	email = "mailto:analeticia_ac@outlook.com",
	whatsapp = "https://wa.me/5531999679109?text=Olá%20Ana%20Letícia!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você.",
	iconSize = 28,
}) {
	return (
		<div className="flex items-center justify-center gap-6">
			<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-pink-500 transition-colors"
				aria-label="GitHub">
				<GithubLogoIcon size={iconSize} />
			</a>

			<a
				href={linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-pink-500 transition-colors"
				aria-label="LinkedIn">
				<LinkedinLogoIcon size={iconSize} />
			</a>

			<a
				href={email}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-pink-500 transition-colors"
				aria-label="Email">
				<EnvelopeSimpleIcon size={iconSize} />
			</a>

			<a
				href={whatsapp}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-pink-500 transition-colors"
				aria-label="WhatsApp">
				<WhatsappLogoIcon size={iconSize} />
			</a>
		</div>
	);
}
