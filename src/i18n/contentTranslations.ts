import type {Language} from './LanguageContext';
import {siteRows} from './siteTranslations';
type Row=readonly [string,string,string,string,string?];const rows:Row[]=[
['O ECOSSISTEMA','THE ECOSYSTEM','EL ECOSISTEMA',"L'ÉCOSYSTÈME"],['Uma arquitetura única para toda a jornada do dado em saúde.','A unified architecture for the entire health data journey.','Una arquitectura única para todo el recorrido de los datos de salud.',"Une architecture unique pour l'ensemble du parcours des données de santé."],['Do sistema hospitalar mais crítico ao indicador socioeconômico municipal — o HDI harmoniza, governa e transforma informações em inteligência acionável para o território.','From the most critical hospital system to municipal socioeconomic indicators, HDI harmonizes, governs and transforms information into actionable territorial intelligence.','Desde el sistema hospitalario más crítico hasta el indicador socioeconómico municipal, HDI armoniza, gobierna y transforma la información en inteligencia territorial procesable.',"Du système hospitalier le plus critique à l'indicateur socio-économique municipal, HDI harmonise, gouverne et transforme les informations en intelligence territoriale exploitable."],
['Ingestão multi-fonte','Multi-source ingestion','Ingesta multifuente','Ingestion multisource'],['Conectores FHIR, HL7 v2, ETL/ELT e APIs REST para HIS, LIS, RNDS, DATASUS e sistemas legados.','FHIR, HL7 v2, ETL/ELT and REST API connectors for HIS, LIS, RNDS, DATASUS and legacy systems.','Conectores FHIR, HL7 v2, ETL/ELT y API REST para HIS, LIS, RNDS, DATASUS y sistemas heredados.','Connecteurs FHIR, HL7 v2, ETL/ELT et API REST pour HIS, LIS, RNDS, DATASUS et systèmes existants.'],['Camada semântica','Semantic layer','Capa semántica','Couche sémantique'],['Modelo canônico de saúde com catálogo, linhagem e qualidade contínua.','Canonical health model with catalog, lineage and continuous quality.','Modelo canónico de salud con catálogo, linaje y calidad continua.','Modèle de santé canonique avec catalogue, traçabilité et qualité continue.'],['IA & modelos preditivos','AI & predictive models','IA y modelos predictivos','IA et modèles prédictifs'],['Motores de risco populacional, demanda assistencial e séries temporais.','Population risk, healthcare demand and time-series engines.','Motores de riesgo poblacional, demanda asistencial y series temporales.','Moteurs de risque populationnel, de demande de soins et de séries temporelles.'],['Orquestração de decisões','Decision orchestration','Orquestación de decisiones','Orchestration des décisions'],['Alertas, painéis executivos e APIs inseridos nos processos existentes.','Alerts, executive dashboards and APIs embedded in existing processes.','Alertas, paneles ejecutivos y API integrados en los procesos existentes.','Alertes, tableaux de bord exécutifs et API intégrés aux processus existants.'],['Governança soberana','Sovereign governance','Gobernanza soberana','Gouvernance souveraine'],['Anonimização, criptografia, perfis de acesso e auditoria fim a fim.','Anonymization, encryption, access profiles and end-to-end auditing.','Anonimización, cifrado, perfiles de acceso y auditoría de extremo a extremo.','Anonymisation, chiffrement, profils d’accès et audit de bout en bout.'],['Interoperabilidade','Interoperability','Interoperabilidad','Interopérabilité'],['Padrões abertos para conversar com qualquer ecossistema.','Open standards to connect with any ecosystem.','Estándares abiertos para conectarse con cualquier ecosistema.','Normes ouvertes pour communiquer avec tout écosystème.'],
['FLUXO DE VALOR','VALUE FLOW','FLUJO DE VALOR','FLUX DE VALEUR'],['Da fonte ao insight, com governança em cada etapa.','From source to insight, with governance at every stage.','De la fuente al conocimiento, con gobernanza en cada etapa.','De la source à la connaissance, avec une gouvernance à chaque étape.'],['Conectar','Connect','Conectar','Connecter'],['Integramos sistemas clínicos, administrativos e bases públicas.','We integrate clinical and administrative systems and public databases.','Integramos sistemas clínicos, administrativos y bases públicas.','Nous intégrons les systèmes cliniques, administratifs et les bases publiques.'],['Harmonizar','Harmonize','Armonizar','Harmoniser'],['Padronizamos conceitos e criamos uma linguagem única.','We standardize concepts and create a common language.','Estandarizamos conceptos y creamos un lenguaje común.','Nous normalisons les concepts et créons un langage commun.'],['Inferir','Infer','Inferir','Inférer'],['Modelos identificam riscos, padrões e oportunidades.','Models identify risks, patterns and opportunities.','Los modelos identifican riesgos, patrones y oportunidades.','Les modèles identifient les risques, tendances et opportunités.'],['Agir','Act','Actuar','Agir'],['Insights chegam a quem decide, com contexto e rastreabilidade.','Insights reach decision-makers with context and traceability.','Los conocimientos llegan a quienes deciden, con contexto y trazabilidad.','Les informations parviennent aux décideurs avec contexte et traçabilité.'],
['Explorar o Ecossistema','Explore the Ecosystem','Explorar el Ecosistema',"Explorer l'Écosystème"],['Inteligência aplicada ao seu contexto.','Intelligence applied to your context.','Inteligencia aplicada a su contexto.','Intelligence appliquée à votre contexte.'],['FALE COM A INFOSERVICE','TALK TO INFOSERVICE','HABLE CON INFOSERVICE','CONTACTEZ INFOSERVICE'],['Conte-nos um pouco sobre o seu contexto. Nossa equipe entrará em contato para uma conversa inicial.','Tell us about your context. Our team will contact you for an initial conversation.','Cuéntenos sobre su contexto. Nuestro equipo se pondrá en contacto para una conversación inicial.','Parlez-nous de votre contexte. Notre équipe vous contactera pour un premier échange.'],
['Nome','Name','Nombre','Nom'],['E-mail institucional','Institutional email','Correo institucional','E-mail institutionnel'],['Instituição','Institution','Institución','Institution'],['Perfil','Profile','Perfil','Profil'],['Gestão pública','Public management','Gestión pública','Gestion publique'],['Saúde privada','Private healthcare','Salud privada','Santé privée'],['Pesquisa e inovação','Research and innovation','Investigación e innovación','Recherche et innovation'],['Qual desafio deseja resolver?','What challenge do you want to solve?','¿Qué desafío desea resolver?','Quel défi souhaitez-vous résoudre ?'],['Solicitar apresentação','Request a presentation','Solicitar presentación','Demander une présentation'],['Enviando...','Sending...','Enviando...','Envoi...'],['Mensagem enviada com sucesso, em breve nossa equipe entrará em contato','Message sent successfully. Our team will contact you shortly.','Mensaje enviado correctamente. Nuestro equipo se pondrá en contacto pronto.','Message envoyé avec succès. Notre équipe vous contactera prochainement.'],
['CONTATO','CONTACT','CONTACTO','CONTACT'],['Como podemos ajudar?','How can we help?','¿Cómo podemos ayudar?','Comment pouvons-nous vous aider ?'],['Escolha o assunto e envie sua mensagem. Nossa equipe responderá pelo e-mail informado.','Choose the subject and send your message. Our team will reply to the email provided.','Elija el asunto y envíe su mensaje. Nuestro equipo responderá al correo indicado.','Choisissez le sujet et envoyez votre message. Notre équipe répondra à l’adresse indiquée.'],['Assunto do contato','Contact subject','Asunto del contacto','Objet du contact'],['Nome completo','Full name','Nombre completo','Nom complet'],['Empresa / Instituição','Company / Institution','Empresa / Institución','Entreprise / Institution'],['Telefone','Phone','Teléfono','Téléphone'],['Mensagem','Message','Mensaje','Message'],['Enviar mensagem','Send message','Enviar mensaje','Envoyer le message'],
['RELAÇÕES INSTITUCIONAIS','INSTITUTIONAL RELATIONS','RELACIONES INSTITUCIONALES','RELATIONS INSTITUTIONNELLES'],['Pronto para transformar dados em decisões de saúde?','Ready to turn data into healthcare decisions?','¿Listo para transformar datos en decisiones de salud?','Prêt à transformer les données en décisions de santé ?'],['Nossa equipe corporativa atende governos, secretarias e redes hospitalares com projetos sob medida de integração e inteligência de dados.','Our corporate team supports governments, health departments and hospital networks with tailored data integration and intelligence projects.','Nuestro equipo corporativo atiende a gobiernos, secretarías y redes hospitalarias con proyectos personalizados de integración e inteligencia de datos.','Notre équipe accompagne gouvernements, administrations et réseaux hospitaliers avec des projets sur mesure d’intégration et d’intelligence des données.'],['Ver casos de sucesso','View success stories','Ver casos de éxito','Voir les cas de réussite'],['Ler análise completa','Read full analysis','Leer análisis completo',"Lire l'analyse complète"],['Voltar para o Blog','Back to Blog','Volver al Blog','Retour au Blog'],['Copiar link','Copy link','Copiar enlace','Copier le lien'],['Link copiado.','Link copied.','Enlace copiado.','Lien copié.'],
...siteRows];
const dictionaries: Record<Exclude<Language, 'pt-BR'>, Map<string, string>> = { en: new Map(), es: new Map(), fr: new Map(), 'pt-PT': new Map() };
rows.forEach(([pt, en, es, fr, ptpt]) => {
	dictionaries.en.set(pt, en);
	dictionaries.es.set(pt, es);
	dictionaries.fr.set(pt, fr);
	dictionaries['pt-PT'].set(pt, ptpt || pt);
});

// Build reverse lookup maps (translated -> pt) so we can detect the canonical PT key
const reverseMaps: Record<Exclude<Language, 'pt-BR'>, Map<string, string>> = {
	en: new Map(),
	es: new Map(),
	fr: new Map(),
	'pt-PT': new Map(),
};
for (const lang of Object.keys(dictionaries) as Array<Exclude<Language, 'pt-BR'>>) {
	const map = dictionaries[lang];
	for (const [pt, translated] of map.entries()) {
		if (translated) reverseMaps[lang].set(translated, pt);
	}
}

// Normalized reverse maps to tolerate minor differences (case, diacritics, extra spaces)
function normalizeForMatch(s: string) {
	return s
		.normalize('NFD')
		.replace(/\p{M}/gu, '') // remove diacritics
		.replace(/\s+/g, ' ')
		.trim()
		.toLowerCase();
}

const normalizedReverseMaps: Record<Exclude<Language, 'pt-BR'>, Map<string, string>> = {
	en: new Map(),
	es: new Map(),
	fr: new Map(),
	'pt-PT': new Map(),
};
for (const lang of Object.keys(reverseMaps) as Array<Exclude<Language, 'pt-BR'>>) {
	const rev = reverseMaps[lang];
	for (const [translated, pt] of rev.entries()) {
		const key = normalizeForMatch(translated);
		// Não sobrescreve colisões como "Tecnologia"/"TECNOLOGIA".
		// A sobrescrita fazia o texto mudar de chave e quebrava a próxima troca.
		if (key && !normalizedReverseMaps[lang].has(key)) normalizedReverseMaps[lang].set(key, pt);
	}
}

export function findPtKeyFromAnyTranslation(text: string): string | undefined {
	if (!text) return undefined;
	// direct: if text is already pt (exists as key in dictionaries.en)
	if (dictionaries.en.has(text) || dictionaries.es.has(text) || dictionaries.fr.has(text) || dictionaries['pt-PT'].has(text)) {
		return text;
	}
	// exact reverse lookup
	for (const lang of Object.keys(reverseMaps) as Array<Exclude<Language, 'pt-BR'>>) {
		const rev = reverseMaps[lang];
		const pt = rev.get(text);
		if (pt) return pt;
	}

	// normalized lookup (case-insensitive, remove diacritics, collapse spaces)
	const norm = normalizeForMatch(text);
	if (norm) {
		for (const lang of Object.keys(normalizedReverseMaps) as Array<Exclude<Language, 'pt-BR'>>) {
			const rev = normalizedReverseMaps[lang];
			const pt = rev.get(norm);
			if (pt) return pt;
		}
	}

	return undefined;
}

export function translateContent(text: string, language: Language) {
	const canonical=findPtKeyFromAnyTranslation(text)??text;
	if (language === 'pt-BR') return canonical;
	return dictionaries[language].get(canonical) || text;
}
