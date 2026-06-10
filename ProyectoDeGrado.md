a 

**Desarrollo de un módulo para el análisis de pruebas motoras de la MDS-UPDRS Parte III (golpeteo de dedos y pronación/supinación) integrado en Vimov** _**Validación de viabilidad tecnológica en entorno controlado de laboratorio (TRL 3)**_ 

## **Proyecto de Grado** 

**Andrés Felipe Cabezas Guerrero Davide Flamini Cazaran Nicolás Cuéllar Molina** 

**Tutora** 

**Mónica María Rojas Rincón, MSc.** 

**Facultad Barberi de Ingeniería, Diseño y Ciencias Aplicadas Ingeniería de Sistemas Santiago De Cali 2026** 

## **Agradecimientos** 

La realización de este proyecto representó un proceso de aprendizaje, crecimiento y trabajo en equipo que no habría sido posible sin el apoyo de varias personas e instituciones. 

En primer lugar, agradecemos a Dios por brindarnos la salud, la fortaleza y la perseverancia necesarias para culminar esta etapa de nuestra formación profesional. 

Expresamos nuestro más sincero agradecimiento a nuestra tutora, Mónica María Rincón Rojas, por su acompañamiento constante, disposición y compromiso durante el desarrollo de este proyecto. Sus orientaciones, observaciones y conocimientos fueron fundamentales para guiarnos en cada una de las etapas del trabajo, permitiéndonos fortalecer tanto los aspectos técnicos como metodológicos de la investigación. 

Agradecemos también al grupo de investigación i2t de la Universidad Icesi por abrirnos las puertas para participar en este proyecto y brindarnos los recursos, espacios y apoyo necesarios para su desarrollo. De igual manera, agradecemos a la Fundación Valle del Lili y a los profesionales que aportaron su conocimiento y experiencia clínica, contribuyendo a orientar el proyecto hacia necesidades reales del ámbito de la salud. 

Extendemos nuestro agradecimiento a los profesores de la Universidad Icesi que hicieron parte de nuestra formación académica y que, a través de sus enseñanzas, aportaron a la construcción de las competencias que hicieron posible la realización de este trabajo. 

Finalmente, agradecemos a nuestras familias y seres queridos por su apoyo incondicional, comprensión y motivación durante todo este proceso. Su confianza y acompañamiento fueron fundamentales para superar los desafíos presentados a lo largo de este camino. 

A todos ellos, nuestro más profundo agradecimiento. 

## _Andrés Felipe Cabezas Guerrero_ 

_Davide Flamini Cazaran_ 

_Nicolás Cuéllar Molina_ 

## **TABLA DE CONTENIDO** 

Agradecimientos .................................................................................................................................................... 2 Tabla de contenido ............................................................................................................................................... 3 Resumen ................................................................................................................................................................... 5 Abstract ..................................................................................................................................................................... 6 Lista de acrónimos ................................................................................................................................................ 7 Glosario de términos ............................................................................................................................................ 9 Índice de figuras................................................................................................................................................... 11 Índice de tablas .................................................................................................................................................... 12 1. INTRODUCCIÓN .......................................................................................................................................... 13 1.1. Contexto ................................................................................................................................................ 13 1.2. Formulación del problema .............................................................................................................. 15 1.3. Impacto del proyecto ........................................................................................................................ 15 1.4. Objetivo General ................................................................................................................................. 17 1.5. Objetivos Específicos ......................................................................................................................... 17 1.6. Hipótesis de Investigación .............................................................................................................. 17 2. MARCO TEÓRICO............................................................................................................................................ 18 2.1 Fisiopatología del Parkinson y Bradicinesia ............................................................................... 18 2.2. La Escala MDS-UPDRS: Estructura y Aplicación Clínica ........................................................ 18 2.3. Evaluación de Movimientos Alternantes Rápidos .................................................................. 18 2.4. Fundamentos de Medición Inercial ............................................................................................. 19 2.5. Principios de Ingeniería de Software para Aplicaciones Clínicas ...................................... 20 2.6. Inteligencia Artificial aplicada al análisis de biomarcadores motores ............................ 20 3. ESTADO DEL ARTE .......................................................................................................................................... 21 3.1. Revisión de Soluciones Tecnológicas .......................................................................................... 21 3.2. Síntesis y Brecha de Conocimiento .............................................................................................. 22 4. METODOLOGÍA ............................................................................................................................................ 24 4.1. Fases del proyecto ............................................................................................................................. 24 

4.2. Relación entre fases y objetivos .................................................................................................... 26 4.3. Cronograma general del proyecto ............................................................................................... 28 5. DESARROLLO DE LA PROPUESTA ......................................................................................................... 29 5.1 Protocolo de captura experimental para las pruebas de golpeteo de dedos y de pronación/supinación .................................................................................................................................... 29 5.2 Correspondencia entre las métricas objetivas y la escala MDS-UPDRS .......................... 36 5.3. Desarrollo e integración del módulo en el ecosistema Vimov–IMUs ............................. 46 5.4. Validación del sistema mediante pruebas internas en laboratorio (TRL 3) ................... 58 6. CONCLUSIONES Y FUTURO TRABAJO ................................................................................................. 71 ANEXOS ................................................................................................................................................................... 73 Referencias bibliográficas ................................................................................................................................. 92 

## **Resumen** 

El presente proyecto de grado se desarrolló en el marco de la colaboración entre el grupo de investigación i2t de la Universidad Icesi y la Fundación Valle del Lili (FVL) en Santiago de Cali, Colombia, institución de referencia en neurología clínica que atiende pacientes con enfermedades neurodegenerativas como la enfermedad de Parkinson. En este contexto clínico e investigativo, se identificó la necesidad de complementar la evaluación subjetiva que realizan los neurólogos mediante la escala MDS-UPDRS Parte III con herramientas tecnológicas que aporten objetividad y reproducibilidad a las mediciones. 

La problemática central aborda la variabilidad inter e intraobservador presente en la calificación de las pruebas de golpeteo de dedos (ítem 3.4) y pronación/supinación (ítem 3.6) de la escala MDS-UPDRS, cuya puntuación depende de la interpretación visual del neurólogo. Esta subjetividad limita la confiabilidad del seguimiento de la progresión de la enfermedad y dificulta la comparación de resultados entre pacientes e instituciones. 

Para dar respuesta a esta problemática, se desarrolló un módulo integrado en el ecosistema existente Vimov–IMUs siguiendo una metodología ágil basada en Scrum, organizada en siete sprints. El proceso incluyó la definición de protocolos estandarizados de captura, el diseño e implementación de un pipeline de procesamiento de señales inerciales en Python, la construcción de una línea base estadística a partir de 23 participantes sanos, el desarrollo de modelos de clasificación automática de severidad mediante Análisis Discriminante Lineal (LDA) con validación Leave-One-Subject-Out (LOSO), la integración de la captura de datos en la aplicación móvil IMUs y visualizaciones clínicas en la plataforma web Vimov. 

Los resultados obtenidos demuestran la viabilidad tecnológica del sistema a nivel TRL 3. Para la prueba de pronación/supinación, el modelo LDA alcanzó un AUC macro de 0.883 y una exactitud del 73.4%, con tamaños de efecto grandes (eta² entre 0.45 y 0.56) en las métricas de cadencia, frecuencia y jerk RMS. Para golpeteo de dedos, las métricas de temporización mostraron alta capacidad discriminativa (eta² hasta 0.628), aunque la posición del sensor en el dorso de la mano resultó subóptima para capturar la amplitud del movimiento distal, identificándose esta limitación como una dirección prioritaria de mejora para fases futuras. 

## **Abstract** 

This undergraduate thesis was developed within the framework of a collaboration between the i2t research group at Universidad Icesi and Fundación Valle del Lili (FVL) in Santiago de Cali, Colombia, a reference institution in clinical neurology that treats patients with neurodegenerative diseases such as Parkinson's disease. Within this clinical and research context, the need was identified to complement the subjective assessment performed by neurologists using the MDS-UPDRS Part III scale with technological tools that provide objectivity and reproducibility to motor evaluations. 

The central problem addresses the inter- and intra-rater variability present in the scoring of the finger tapping (item 3.4) and pronation/supination (item 3.6) tests of the MDS-UPDRS scale, whose ratings depend on the neurologist's visual interpretation. This subjectivity limits the reliability of disease progression monitoring and hinders the comparison of results across patients and institutions. 

To address this problem, a module integrated into the Vimov–IMUs ecosystem was developed following an agile methodology based on Scrum, organized into seven sprints. The process included the definition of standardized capture protocols, the design and implementation of an inertial signal processing pipeline in Python, the construction of a statistical baseline from 23 healthy participants, the development of automatic severity classification models using Linear Discriminant Analysis (LDA) with Leave-One-Subject-Out (LOSO) validation, and the integration of clinical visualizations into the Vimov web platform and the IMUs mobile application with the capture. 

The results obtained demonstrate the technological feasibility of the system at TRL 3 level. For the pronation/supination test, the LDA model achieved a macro AUC of 0.883 and an accuracy of 73.4%, with large effect sizes (eta² between 0.45 and 0.56) for cadence, frequency, and jerk RMS metrics. For finger tapping, timing metrics showed high discriminative capacity (eta² up to 0.628); however, the sensor placement on the back of the hand proved suboptimal for capturing distal movement amplitude, identifying this limitation as a priority direction for improvement in future phases. 

## **Lista de acrónimos** 

- _APA_ Asociación Americana de Psicología (American Psychological Association) _BLE_ Bluetooth de Baja Energía (Bluetooth Low Energy) 

- _DSP_ Procesamiento Digital de Señales (Digital Signal Processing) _EP_ Enfermedad de Parkinson _FVL_ Fundación Valle del Lili _IEEE_ Instituto de Ingenieros Eléctricos y Electrónicos (Institute of Electrical and Electronics Engineers) 

- _IEC_ Comisión Electrotécnica Internacional (International Electrotechnical Commission) 

- _IMU_ Unidad de Medición Inercial (Inertial Measurement Unit) 

- _JSON_ Notación de Objetos de JavaScript (JavaScript Object Notation) _KNN K-Nearest Neighbors_ (K vecinos más cercanos) _LDA_ Análisis Discriminante Lineal (Linear Discriminant Analysis) _LOSO_ Validación cruzada dejando un sujeto fuera (Leave-One-Subject-Out Cross Validation) 

- _MDS-UPDRS_ Escala Unificada de Evaluación de la Enfermedad de Parkinson de la Sociedad de Trastornos del Movimiento (Movement Disorder Society – Unified Parkinson’s Disease Rating Scale) 

- _RASCI_ Responsable, Aprobador, Soporte, Consultado e Informado (Responsible, Accountable, Support, Consulted, Informed) 

- _SWEBOK_ Cuerpo de Conocimiento de Ingeniería de Software (Software Engineering Body of Knowledge) 

_TRL_ Nivel de Madurez Tecnológica (Technology Readiness Level) 

_UI_ Interfaz de Usuario (User Interface) 

## **Glosario de términos** 

**Acelerómetro:** Sensor que mide aceleración lineal en uno o más ejes. En este proyecto se utiliza junto al giroscopio para la medición del movimiento de la mano. 

**Amplitud de movimiento:** Rango angular o espacial total de un movimiento articular. En este trabajo se emplea para describir la extensión de los movimientos de pronación y supinación. 

**Análisis Discriminante Lineal (LDA):** Técnica de aprendizaje supervisado utilizada para clasificación y reducción de dimensionalidad, que proyecta los datos en un subespacio lineal que maximiza la separación entre clases. 

**Baseline (línea base):** Conjunto de datos de referencia obtenido en condiciones controladas, generalmente de sujetos sanos, utilizado como estándar de comparación para el análisis de desviaciones en datos clínicos. 

**Bluetooth Low Energy (BLE):** Protocolo de comunicación inalámbrica de bajo consumo energético utilizado para la transmisión de datos entre dispositivos, en este caso entre las IMUs y la aplicación móvil. 

**Bradicinesia:** Síntoma motor de la enfermedad de Parkinson caracterizado por la reducción de la velocidad, amplitud y fluidez del movimiento voluntario. 

**Decrecimiento:** Reducción progresiva de la amplitud o velocidad del movimiento durante repeticiones consecutivas, indicador clínico de bradicinesia. 

**Fluctuaciones motor ON/OFF:** Variaciones en la respuesta motora que experimentan los pacientes con Parkinson bajo tratamiento farmacológico con levodopa. El período ON corresponde a una respuesta adecuada al medicamento con control motor relativamente normal; el período OFF corresponde a la reaparición de síntomas motores cuando el efecto del fármaco disminuye. 

**Ganglios basales:** Conjunto de núcleos subcorticales del cerebro que participan en la regulación del movimiento voluntario. En la enfermedad de Parkinson, la pérdida de neuronas dopaminérgicas en la sustancia negra altera su funcionamiento, produciendo síntomas motores como la bradicinesia. 

**Giroscopio:** Sensor que mide velocidad angular en uno o más ejes, utilizado para la estimación de orientación y rotación de la mano. 

**JSON (JavaScript Object Notation):** Formato ligero de intercambio de datos utilizado para estructurar y transmitir información entre sistemas. 

**KNN (K-Nearest Neighbors):** Algoritmo de clasificación supervisada basado en la asignación de clase según la mayoría de los _k_ vecinos más cercanos en el espacio de características. 

**LOSO (Leave-One-Subject-Out):** Método de validación cruzada en el que se deja un sujeto fuera del entrenamiento para evaluación, repitiendo el proceso para todos los sujetos del conjunto de datos. 

**MDS-UPDRS (Movement Disorder Society – Unified Parkinson’s Disease Rating Scale):** Escala clínica estandarizada para la evaluación de la severidad y progresión de la enfermedad de Parkinson. 

**Neurología:** Rama de la medicina encargada del estudio del sistema nervioso y sus trastornos. 

**Neuromelanina:** Pigmento presente en neuronas dopaminérgicas de la sustancia negra, asociado a funciones motoras. 

**Pars compacta:** Subregión de la sustancia negra que contiene neuronas dopaminérgicas implicadas en el control motor. 

**Pipeline:** Secuencia estructurada de etapas de procesamiento de datos desde la adquisición hasta la obtención de resultados finales. 

**Pronación/Supinación:** Movimientos de rotación del antebrazo; pronación corresponde a la rotación de la palma hacia abajo y supinación hacia arriba. 

**Sensor inercial:** Dispositivo que mide aceleración y velocidad angular sin referencia externa. Base de las unidades IMU. 

**TRL 3 (Technology Readiness Level 3):** Nivel de madurez tecnológica correspondiente a la validación experimental inicial en entorno de laboratorio. 

**Unidad de Medición Inercial (IMU):** Dispositivo que integra sensores de aceleración y velocidad angular para la medición del movimiento y la orientación. 

## **Índice de figuras** 

|||**Página**|
|---|---|---|
|Figura|2.1: Sistema de coordenadas.|19|
|Figura|5.1: Sistema de referencia en IMUs.|31|
|Figura|5.2: Protocolo de pronación supinación.|34|
|Figura|5.3: Protocolo de golpeteo de dedos.|35|
|Figura|5.4: Notebook de procesamiento implementado en Colab .|37|
|Figura|5.5: Diagrama C4 Nivel 2.|47|
|Figura|5.6: Diagrama de secuencia.|48|
|Figura|5.7: Flujo de IMUs.|51|
|Figura|5.8: Pantalla de Vimov.|52|
|Figura|5.9: Evolución por score - Pronación/Supinación.|61|
|Figura|5.10: Evolución por score – Golpeteo de dedos.|63|
|Figura|5.11: Variables discriminativas – Golpeteo de dedos.|65|
|Figura|5.12: Variables discriminativas – Pronación/Supinación.|66|
|Figura|5.13: Correlación de Spearman - Golpeteo de dedos.|67|
|Figura|5.14: Correlación de Spearman - Pronación/Supinación.|68|



## **Índice de tablas** 

|||**Página**|
|---|---|---|
|Tabla|3.1: Estado del Arte|23|
|Tabla|4.1: Fases del proyecto.|25|
|Tabla|4.3: Fases y objetivos.|27|
|Tabla|5.1: Contribución de los sprints a los objetivos.|29|
|Tabla|5.2: Literatura de protocolos.|30|
|Tabla|5.3: Métricas Pronación/Supinación.|38|
|Tabla|5.4: Métricas Golpeteo de dedos|39|
|Tabla|5.5: Comparación de Modelos Pronación/Supinación|42|
|Tabla|5.6: Comparación de Modelos Golpeteo de dedos|44|
|Tabla|5.7: Roles y Responsabilidades.|49|
|Tabla|5.8: Pruebas técnicas para app móvil IMUs.|54|
|Tabla|5.9: Pruebas técnicas para la plataforma Vimov.|55|
|Tabla|5.10: Composición del dataset después del control de calidad.|59|
|Tabla|5.11: Resultados del análisis Kruskal-Wallis.|64|
|Tabla|5.12: Resultados LDA LOSO.|69|



## **1. INTRODUCCIÓN** 

## **1.1. Contexto** 

La enfermedad de Parkinson (EP) es la segunda enfermedad neurodegenerativa más frecuente a nivel mundial, después de la enfermedad de Alzheimer. Según la (Parkinson’s Foundation, 2024), actualmente afecta a más de 10 millones de personas en todo el mundo, cifra que ha aumentado significativamente respecto a los 6.2 millones reportados anteriormente por (Dorsey et al., 2018). Se estima que esta cifra podría alcanzar 25.2 millones de personas para el año 2050, lo que representa un incremento del 112% respecto a 2021 (Su et al., 2025). Este incremento representa un desafío significativo para los sistemas de salud, tanto en términos económicos como en la necesidad de desarrollar métodos de diagnóstico y seguimiento más precisos. 

En la práctica clínica, la evaluación de la severidad de los síntomas motores se realiza mediante la Escala Unificada de Evaluación de la Enfermedad de Parkinson de la Movement Disorder Society (MDS-UPDRS). La Parte III de esta escala, correspondiente al examen motor, constituye la principal herramienta para cuantificar la gravedad y progresión de los síntomas (Goetz et al., 2008). Dentro de esta sección se incluyen pruebas específicas para la evaluación de la bradicinesia, un síntoma caracterizado por la lentitud del movimiento, la reducción de su amplitud y la disminución progresiva de su velocidad. Entre estas pruebas se encuentran el golpeteo de dedos (ítem 3.4) y la pronación/supinación de la mano (ítem 3.6) (Goetz et al., 2008), las cuales permiten evaluar el deterioro motor en los pacientes. 

A pesar de su uso extendido, la interpretación de estas pruebas depende de la evaluación visual del neurólogo mediante una escala ordinal de 0 a 4. Este enfoque, aunque estándar en la práctica clínica, presenta limitaciones relacionadas con la variabilidad inter e intraobservador, lo que afecta la confiabilidad y consistencia de las evaluaciones (Postuma et al., 2015). Esta variabilidad dificulta el seguimiento preciso de la progresión de la enfermedad y la comparación entre pacientes o instituciones. 

En los últimos años, se han explorado alternativas tecnológicas para reducir este sesgo subjetivo. Diversos estudios han demostrado que el uso de sensores inerciales, dispositivos ponibles y teléfonos móviles permite capturar datos de movimiento que reflejan de manera objetiva la evaluación clínica (Choi et al., 2016; Dai et al., 2015; Höglund et al., 2021; SánchezFernández et al., 2023; Yu et al., 2023). Sin embargo, muchas de estas soluciones aún se encuentran en fases experimentales y no han sido ampliamente adoptadas en la práctica clínica, debido a la falta de estandarización en los protocolos de medición y a la limitada integración con sistemas médicos. 

En este contexto, este proyecto propone el desarrollo de un módulo integrado al ecosistema Vimov, orientado al análisis de pruebas motoras como la pronación/supinación de la mano y el golpeteo de dedos, definidas en la Parte III de la MDS-UPDRS. Este ecosistema se complementa con el desarrollo e implementación de funcionalidades en una aplicación móvil, la cual permite la ejecución y captura de estas pruebas motoras en pacientes con enfermedad de Parkinson mediante la recolección de señales de movimiento en tiempo real. Basado en el trabajo previo del grupo i2t de la Universidad Icesi y su colaboración con la Fundación Valle del Lili (FVL), se plantea el uso de IMU para la obtención de métricas cuantitativas del movimiento. Estas se seleccionan por su bajo costo, portabilidad y facilidad de integración, lo que las hace adecuadas para entornos clínicos diversos. 

Este enfoque se justifica por tres razones principales: en primer lugar, responde a la necesidad de obtener mediciones objetivas que reduzcan la variabilidad en la evaluación clínica; en segundo lugar, se alinea con la tendencia actual hacia el uso de dispositivos portables y soluciones de salud digital y, en tercer lugar, contribuye al desarrollo de metodologías estandarizadas que puedan ser validadas en entornos reales. El objetivo final es aportar a una evaluación más precisa y consistente de pacientes con enfermedad de Parkinson, y sentar bases para herramientas tecnológicas aplicables en el ámbito clínico. 

## **1.2. Formulación del problema** 

La evaluación de las pruebas de golpeteo con los dedos y pronación/supinación en la escala MDS-UPDRS presenta un componente subjetivo inherente, dado que la calificación (de 0 a 4) se basa en la observación clínica del neurólogo respecto a la rapidez, amplitud, regularidad y decremento del movimiento. Esta dependencia de la evaluación visual introduce variabilidad en los resultados, evidenciada tanto a nivel interobservador (diferencias entre distintos evaluadores) como intraobservador (variaciones en la evaluación del mismo evaluador en distintos momentos). Esta variabilidad limita la confiabilidad del seguimiento de la enfermedad de Parkinson, dificultando la interpretación de los cambios en la puntuación de la escala, ya que no es posible determinar con certeza si dichos cambios corresponden a una progresión real de la enfermedad o a inconsistencias en la evaluación clínica. 

Adicionalmente, esta falta de objetividad afecta la comparación de resultados entre diferentes centros de salud y reduce la precisión en la evaluación de la eficacia de los tratamientos. En este contexto, la ausencia de métricas cuantitativas estandarizadas en la evaluación de estos movimientos motiva la necesidad de desarrollar herramientas objetivas que permitan complementar la valoración clínica tradicional. Para analizar de manera estructurada las causas y consecuencias de esta problemática se elaboró un árbol de problemas (ver Anexo A). 

En este contexto, la pregunta de investigación que orienta el presente trabajo es: ¿es posible desarrollar un módulo integrado en el ecosistema Vimov que, mediante sensores inerciales, capture y cuantifique objetivamente las pruebas de golpeteo de dedos y pronación/supinación de la MDS-UPDRS Parte III, y que demuestre en un entorno controlado (TRL 3) que las métricas extraídas discriminan entre niveles de severidad alineados con los criterios clínicos de la escala? 

## **1.3. Impacto del proyecto** 

El impacto de esta iniciativa se analiza en distintos niveles: 

En el ámbito clínico, el proyecto proporciona a los neurólogos indicadores cuantitativos que complementan la evaluación tradicional, contribuyendo a un seguimiento más preciso de la progresión de la enfermedad y a la toma de decisiones clínicas más informadas. En el ámbito académico, fortalece la capacidad investigativa del grupo i2t de la Universidad Icesi y su colaboración con la Fundación Valle del Lili, facilitando la generación de datos estructurados que pueden servir como base para futuros estudios y publicaciones científicas. En el ámbito social, la propuesta contribuye a mejorar la accesibilidad a evaluaciones objetivas en pacientes con 

enfermedad de Parkinson, incluyendo aquellos en zonas rurales o con acceso limitado a servicios de salud. Finalmente, en el ámbito tecnológico y económico, el uso de dispositivos de bajo costo como las unidades de medición inercial (IMU) favorece la escalabilidad de la solución y reduce la dependencia de infraestructura especializada, lo que facilita su potencial adopción en diferentes contextos de atención en salud. 

## **1.4. Objetivo General** 

Desarrollar un módulo para el ecosistema Vimov que permita medir y analizar de forma objetiva las pruebas de golpeteo de dedos y pronación/supinación de la mano, correspondientes a la Parte III de la escala MDS-UPDRS, con el fin de complementar la evaluación clínica en pacientes con enfermedad de Parkinson. 

## **1.5. Objetivos Específicos** 

**Definir un protocolo de captura experimental** para las pruebas de golpeteo de dedos y de pronación/supinación que estandarice la colocación del dispositivo, el sistema de referencia de vectores de orientación y la postura del paciente. 

## **Establecer una correspondencia entre las métricas objetivas calculadas y la escala** 

**MDS-UPDRS** , comparando los resultados cuantitativos con las puntuaciones de neurólogos para objetivar los criterios clínicos de cada nivel de la escala. 

## **Desarrollar un módulo integrado en Vimov, junto con una integración en la aplicación** 

**IMUs** que permita la gestión de pruebas, la visualización de señales capturadas y la revisión de resultados cuantitativos de forma intuitiva por parte del personal clínico. 

**Validar el sistema mediante pruebas internas en el laboratorio** , midiendo consistencia y utilidad clínica preliminar en condiciones controladas (TRL 3). 

## **1.6. Hipótesis de Investigación** 

A partir del problema identificado y los objetivos planteados, se plantea la hipótesis de que las características cinemáticas obtenidas mediante una unidad de medición inercial (IMU) ubicada en la muñeca permiten diferenciar de manera significativa los niveles de severidad motora establecidos por la escala MDS-UPDRS en las pruebas de golpeteo de dedos y pronación/supinación. En consecuencia, se espera que las métricas extraídas presenten diferencias estadísticamente significativas entre los grupos evaluados y que puedan emplearse para discriminar los distintos niveles de severidad mediante técnicas de análisis y clasificación, proporcionando evidencia de la viabilidad tecnológica del sistema desarrollado en un entorno controlado de laboratorio (TRL 3). 

## **2. MARCO TEÓRICO** 

## **2.1 Fisiopatología del Parkinson y Bradicinesia** 

La enfermedad de Parkinson es un trastorno neurodegenerativo progresivo caracterizado por la pérdida de neuronas dopaminérgicas en la pars compacta de la sustancia negra (Kandel et al., 2013). Esta disminución de dopamina afecta los circuitos de los ganglios basales, estructuras fundamentales en la regulación del movimiento voluntario, lo que da lugar a síntomas motores como temblor en reposo, rigidez, alteraciones posturales, bradicinesia y reducción de la coordinación motora. 

## **2.2. La Escala MDS-UPDRS: Estructura y Aplicación Clínica** 

La Movement Disorder Society – Unified Parkinson’s Disease Rating Scale (MDS-UPDRS) es la herramienta estándar para la evaluación clínica de la enfermedad de Parkinson. Se compone de cuatro secciones: síntomas no motores (Parte I), actividades de la vida diaria (Parte II), examen motor (Parte III) y complicaciones motoras (Parte IV). Este proyecto se centra en la Parte III, donde cada ítem se califica en una escala ordinal de 0 (normal) a 4 (severo) (Goetz et al., 2008). A pesar de su estandarización, la evaluación depende de la interpretación clínica del examinador, lo que introduce variabilidad interobservador e intraobservador, afectando la consistencia de las mediciones. 

## **2.3. Evaluación de Movimientos Alternantes Rápidos** 

Las pruebas de movimientos alternantes rápidos permiten la evaluación directa de la bradicinesia en pacientes con enfermedad de Parkinson, constituyendo parte de los ítems motores de la escala MDS-UPDRS Parte III (Goetz et al., 2008). Los criterios de evaluación incluyen aspectos como velocidad, amplitud, regularidad y decremento del movimiento. 

**2.3.1. Golpeteo de dedos (ítem 3.4):** El paciente realiza movimientos repetitivos de oposición entre el dedo índice y el pulgar durante diez repeticiones, evaluándose la velocidad, amplitud, regularidad y decremento del movimiento (Goetz et al., 2008). Clínicamente, un score 0 indica ejecución normal sin restricciones, mientras que scores progresivamente mayores reflejan enlentecimiento, reducción de amplitud, irregularidad creciente y, en los casos más severos (score 4), incapacidad práctica para completar el movimiento. El decremento es un criterio especialmente relevante, ya que refleja la fatiga motora progresiva característica de la bradicinesia: a medida que avanza la prueba, la amplitud y velocidad disminuyen de forma involuntaria, lo que distingue la bradicinesia parkinsoniana del enlentecimiento por cansancio normal. 

**2.3.2. Pronación/Supinación (ítem 3.6):** El paciente realiza movimientos alternantes de pronación y supinación de la mano, evaluándose criterios similares relacionados con la velocidad, amplitud, regularidad y deterioro progresivo del movimiento (Goetz et al., 2008). A diferencia del golpeteo de dedos, este movimiento involucra principalmente la articulación radiocubital y los músculos pronadores y supinadores del antebrazo, produciendo una rotación axial que es capturable directamente mediante giroscopios ubicados en la muñeca. Esta característica biomecánica hace que la prueba sea especialmente adecuada para la cuantificación mediante IMUs, ya que el eje de rotación principal del movimiento coincide con el plano de mayor sensibilidad del sensor en la posición estandarizada. 

## **2.4. Fundamentos de Medición Inercial** 

Las **IMUs** combinan sensores, como acelerómetros y giróscopos para medir el movimiento (ver Figura 2.1). En concreto, el giroscopio, registra la velocidad angular en tres ejes: _roll_ (balanceo), _pitch (cabeceo)_ y _yaw (guiñada),_ lo cual permite analizar la orientación del sistema (Tomaszewski et al., 2017). En este proyecto, el sensor se ubica en el dorso de la mano, lo que permite asociar los movimientos de pronación/supinación y golpeteo de dedos con componentes angulares predominantes, facilitando la extracción de métricas como velocidad angular y amplitud de rotación (Britting, 1971). 

**==> picture [161 x 9] intentionally omitted <==**

**----- Start of picture text -----**<br>
FIGURA 2.1: Sistema de coordenadas.<br>**----- End of picture text -----**<br>


## **2.5. Principios de Ingeniería de Software para Aplicaciones Clínicas** 

El desarrollo del software se fundamenta en principios de ingeniería que garantizan calidad, seguridad y usabilidad. Se consideran las buenas prácticas definidas en el Software Engineering Body of Knowledge (SWEBOK) (Bourque & Fairley, 2014) y las del Institute of Electrical and Electronics Engineers (IEEE) (IEEE Computer Society et al., 2010), las cuales estructuran el desarrollo en etapas de requisitos, diseño, implementación, pruebas y mantenimiento. 

Adicionalmente, se sigue la norma IEC 62304 (International & Commission, 2006), que establece el ciclo de vida del software en sistemas médicos. Esta norma clasifica el software médico según su nivel de riesgo y define los requisitos de documentación, verificación y validación aplicables a cada clase. Bajo este enfoque, el sistema se organiza en módulos de captura de datos, procesamiento, almacenamiento y visualización, con el fin de asegurar trazabilidad, mantenibilidad y confiabilidad. En el contexto de este proyecto, estos principios orientaron decisiones de diseño como la separación de responsabilidades entre la aplicación móvil y la plataforma Vimov, la definición de criterios de aceptación para las pruebas técnicas y la documentación del protocolo experimental como requisito verificable. 

## **2.6. Inteligencia Artificial aplicada al análisis de biomarcadores motores** 

La inteligencia artificial, particularmente el aprendizaje automático, ha adquirido un papel relevante en la medicina de precisión. En la enfermedad de Parkinson, estas técnicas permiten transformar señales cinemáticas en métricas cuantitativas con potencial valor clínico (SánchezFernández et al., 2023; Bremm et al., 2024). 

En este proyecto se emplean dos algoritmos de clasificación supervisada. El Análisis Discriminante Lineal (LDA) es un método que busca una proyección del espacio de características que maximice la separación entre clases, asumiendo que los datos de cada clase siguen una distribución normal multivariada con covarianzas iguales. Su principal ventaja en contextos de muestra pequeña es su interpretabilidad y su robustez cuando los supuestos se cumplen aproximadamente; en este trabajo se utiliza como herramienta exploratoria para evaluar la discriminabilidad de las métricas extraídas entre niveles de severidad. El algoritmo K-Nearest Neighbors (KNN) es un clasificador no paramétrico que asigna a cada nueva observación la clase más frecuente entre sus k vecinos más cercanos en el espacio de características. No asume una forma funcional para la frontera de decisión, lo que lo hace flexible ante distribuciones no lineales, aunque es sensible a la escala de las variables y al tamaño de la muestra. En este proyecto se emplea como clasificador principal para la estimación de severidad, evaluado mediante métricas de desempeño como AUC y MCC que son robustas ante desbalance de clases. 

## **3. ESTADO DEL ARTE** 

## **3.1. Revisión de Soluciones Tecnológicas** 

En las últimas dos décadas se han desarrollado diversas tecnologías orientadas a la medición objetiva de la bradicinesia en la enfermedad de Parkinson. Si bien estos enfoques han permitido avances significativos en la cuantificación del movimiento, aún persisten limitaciones relacionadas con la estandarización, la generalización clínica y la integración en entornos médicos reales. 

## **3.1.1. Enfoques basados en Sensores Inerciales (IMUs)** 

(Höglund et al., 2021) analizaron el impacto de la ubicación de unidades de medición inercial (IMU) en la precisión de la captura del movimiento, incluyendo la prueba de pronación/supinación. Los resultados mostraron que la posición del sensor influye significativamente en la estimación de los ángulos articulares, evidenciando variaciones considerables en los valores obtenidos. El estudio sugiere ubicaciones óptimas como el dorso de la mano y el antebrazo distal, pero destaca la necesidad de protocolos estandarizados que garanticen la reproducibilidad de los resultados en contextos clínicos. 

(Sánchez-Fernández et al., 2023) propusieron un enfoque computacional para la evaluación de la pronación/supinación mediante IMUs ubicadas en el dorso de la mano. A partir de señales inerciales, se extrajeron características biomecánicas utilizadas para entrenar modelos de clasificación que alcanzaron una precisión superior al 85%, superando la concordancia interobservador reportada en evaluaciones clínicas. Sin embargo, el estudio presenta limitaciones relacionadas con el tamaño de la muestra, la ausencia de casos avanzados y la restricción a una sola prueba motora. 

En una línea similar, (Bremm et al., 2024) evaluaron el uso de dos IMUs ubicadas en el dorso de cada mano en 33 personas con EP y 12 controles, entrenando modelos Random Forest para clasificar subitems de la MDS-UPDRS III incluyendo golpeteo de dedos y pronación/supinación. Los modelos alcanzaron una precisión del 94% en clasificación de tareas y valores AUC entre 68% y 92% para la estimación de scores de severidad, demostrando la viabilidad de sensores inerciales para la cuantificación automatizada de bradicinesia en condiciones clínicas reales. 

(Dai et al., 2015)  desarrollaron un sistema portátil para la evaluación de bradicinesia mediante IMUs ubicadas en el dedo medio durante tareas de apertura y cierre de la mano. El sistema permitió extraer parámetros cinemáticos correlacionados con la evaluación clínica, mostrando consistencia en la estimación de la severidad del síntoma. No obstante, el uso de 

sensores especializados y la complejidad del procesamiento de señales limitan su adopción en entornos clínicos generales, además de la reducida muestra utilizada en el estudio. 

## **3.1.2. Enfoques basados en Dispositivos de Uso Cotidiano** 

(Choi et al., 2016) propusieron el uso de acelerómetros integrados en teléfonos móviles para la evaluación de movimientos relacionados con la bradicinesia. Este enfoque demostró la viabilidad de utilizar dispositivos de uso cotidiano para la captura de patrones motores, aunque la necesidad de sostener el dispositivo en una posición específica puede alterar la naturalidad del movimiento y afectar la consistencia de las mediciones. 

(Yu et al., 2023) presentaron un método basado en visión por computador para la evaluación del golpeteo de dedos mediante videos RGB. Utilizando técnicas de estimación de pose, se extrajeron características biomecánicas alineadas con la escala MDS-UPDRS, alcanzando un desempeño comparable al de evaluadores clínicos expertos. Sin embargo, el sistema depende fuertemente de condiciones controladas de captura, como iluminación, posición de cámara y ausencia de oclusiones, lo que limita su robustez en entornos clínicos reales. En línea con este enfoque, el presente proyecto exploró de manera complementaria el desarrollo de un pipeline de visión por computador para la misma tarea, utilizando MediaPipe HandLandmarker y el dataset FIS (Zenodo), sentando las bases metodológicas para una futura comparación entre modalidades de captura. Este desarrollo se detalla en el Anexo N. 

## **3.2. Síntesis y Brecha de Conocimiento** 

El estado del arte evidencia múltiples aproximaciones para la evaluación de la bradicinesia mediante sensores inerciales, visión por computador y dispositivos móviles. Sin embargo, persisten limitaciones relacionadas con la estandarización de protocolos, la cobertura completa de pruebas clínicas y la integración en sistemas clínicos funcionales. La Tabla 3.1 resume los principales enfoques revisados, destacando el tipo de tecnología utilizada, las pruebas motoras evaluadas y el nivel de integración clínica. En general, los trabajos se centran en la validación técnica de sensores o algoritmos, con limitada implementación en entornos clínicos reales. 

En este contexto, la brecha identificada corresponde a la falta de una solución integrada que conecte la captura de datos mediante IMUs con su procesamiento y visualización dentro de un ecosistema clínico. En particular, se requiere una arquitectura que transforme las señales de movimiento en métricas cuantitativas alineadas con la escala MDS-UPDRS. Este proyecto aborda dicha brecha mediante la integración de una aplicación móvil para la captura de datos y un módulo analítico en el ecosistema Vimov, permitiendo la generación y visualización de métricas objetivas para las pruebas de golpeteo de dedos y pronación/supinación. 

## **Nota:** ✓ indica cumplimiento y △ indica cumplimiento parcial. 

TABLA 3.1: Estado del arte. 

|**Característica**|**Höglund et**<br>**al. (2021)**|**Sánchez-**<br>**Fernández**<br>**(2023)**|**Dai et**<br>**al.**<br>**(2015)**|**Choi et**<br>**al.**<br>**(2016)**|**Yu et al.**<br>**(2023)**|**Bremm**<br>**et al.**<br>**(2024)**|**Este**<br>**Proyecto**<br>**(Vimov)**|
|---|---|---|---|---|---|---|---|
|**IMU**|✓|✓|✓|||✓|✓|
|**Captura por video**|||||✓|||
|**App**||||✓|||✓|
|**Prueba 3.4**<br>**(golpeteo de**<br>**dedos)**|||✓||✓|✓|✓|
|**Prueba 3.6**<br>**(pronación/**<br>**Supinación)**|✓|✓||✓||✓|✓|
|**Protocolo**<br>**Estándar**||△|||△|✓|✓|
|**Integración en**<br>**Plataforma**<br>**Clínica**|||||||✓|



## **4. METODOLOGÍA** 

La metodología utilizada corresponde a un enfoque híbrido de desarrollo ágil, tomando como referencia algunas prácticas del marco de trabajo Scrum para la organización y seguimiento del proyecto. En particular, se emplean elementos como la definición de historias de usuario, la planificación de actividades mediante sprint planning, la organización iterativa por sprints, las revisiones parciales de avance (sprint review) y las retrospectivas (sprint retrospective), permitiendo estructurar el desarrollo de manera iterativa y facilitar la validación progresiva del avance del proyecto. 

Para la gestión operativa se utiliza Jira, herramienta empleada para el seguimiento de tareas, organización del backlog y control de historias de usuario. La organización del backlog se estructura en torno a épicas e historias de usuario, cuyo detalle completo se presenta en el Anexo B. Asimismo, GitHub se utiliza para el control de versiones y la colaboración sobre el código fuente del sistema. Todos los enlaces de interés están situados en el Anexo C. Adicionalmente, se define una matriz RASCI para establecer los roles y responsabilidades de los participantes durante las distintas actividades del proyecto (ver Anexo D). 

En cuanto al marco ético, el presente proyecto se desarrolló en el contexto del grupo de investigación i2t de la Universidad Icesi y su colaboración con la Fundación Valle del Lili, institución de referencia para la validación clínica futura del sistema. En esta fase (TRL 3), el trabajo involucró exclusivamente participantes sanos no diagnosticados que participaron de forma voluntaria, informados verbalmente sobre el propósito y las tareas del estudio. El proyecto no involucró pacientes diagnosticados con enfermedad de Parkinson ni procedimientos de riesgo, por lo que se enmarca dentro de una investigación de riesgo mínimo según los criterios de la Resolución 8430 de 1993 del Ministerio de Salud de Colombia. Para las fases de validación clínica posteriores (TRL 4 en adelante), el equipo se compromete a obtener aprobación formal de un comité de ética institucional, implementar un proceso de consentimiento informado escrito y alinear el protocolo con los lineamientos de investigación del grupo i2t y la FVL. 

## **4.1. Fases del proyecto** 

El desarrollo se organiza en siete sprints, cada uno con una duración y alcance definidos. En la Tabla 4.1 se presentan las fases metodológicas, las actividades principales y los resultados esperados. 

TABLA 4.1: Fases del proyecto. 

|**Sprint / Fase**|**Duración**<br>**estimada**|**Actividades principales**|**Resultado esperado**|
|---|---|---|---|
|**Sprint 1 – Análisis**<br>**funcional**<br>**inicial**<br>**e**<br>**integración inicial**|4 semanas|- Revisión de la arquitectura actual de<br>Vimov y flujo de comunicación con las<br>IMUs.<br>-<br>Identificación<br>de<br>puntos<br>de<br>integración para las nuevas pruebas.<br>- Definición del backlog de producto<br>y planificación general del proyecto.<br>- Adaptación de la interfaz de captura<br>y almacenamiento en Vimov para<br>prueba de PronaciónySupinación|Diagramas,<br>documentación<br>y<br>backlog iniciales.<br>Flujo<br>completo<br>de<br>captura y envío de datos<br>IMUs|
|**Sprint 2 – Diseño de**<br>**protocolos y análisis**<br>**exploratorio de datos**|5 semanas|- Definición de las pruebas clínicas de<br>pronación/supinación y golpeteo de<br>dedos.<br>- Elaboración del**protocolo de**<br>**captura**<br>**estandarizado**<br>(posicionamiento,<br>frecuencia<br>de<br>muestreo,<br>duración).<br>-<br>Inicio<br>del<br>análisis<br>de<br>datos<br>capturados:<br>limpieza<br>preliminar,<br>organización por sesión y detección<br>de inconsistencias.<br>- Exploración de tendencias y cálculo<br>inicial de variables básicas (duración,<br>frecuencia<br>media,<br>número<br>de<br>repeticiones).<br>- Validación funcional preliminar de<br>laspruebas.|Primeros<br>análisis<br>exploratorios realizados<br>con datos reales, pruebas<br>motoras<br>integradas<br>y<br>protocolo<br>de<br>captura<br>validado.|
|**Sprint**<br>**3**<br>**–**<br>**Procesamiento**<br>**y**<br>**análisis de datos**|4 semanas|-<br>Limpieza<br>avanzada,<br>filtrado<br>y<br>normalización de señales obtenidas<br>desde<br>las<br>IMUs.<br>- Cálculo de métricas cinemáticas<br>(velocidad,<br>amplitud,<br>frecuencia).|Dataset<br>procesado<br>y<br>consolidado;<br>métricas<br>cinemáticas calculadas y<br>listas para correlación<br>clínica.|



|||- Creación del dataset estructurado<br>para análisis posterior.<br>-Análisis exploratorio comparativo<br>entrepruebasy participantes||
|---|---|---|---|
|**Sprint 4 – Correlación**<br>**clínica e integración de**<br>**visualización**<br>**y**<br>**procesamiento**|4 semanas|- Correlación entre métricas obtenidas<br>y<br>escala<br>MDS-UPDRS.<br>- Análisis estadístico descriptivo y<br>validación<br>de<br>indicadores<br>más<br>representativos.<br>- Implementación del módulo de<br>procesamiento y visualización de<br>resultados.|Informe de correlación<br>cuantitativa<br>y<br>visualización funcional de<br>resultados<br>clínicos<br>en<br>Vimov.|
|**Sprint 5 – Ajuste del**<br>**procesador analítico y**<br>**reportes**|4 semanas|- Ajuste del módulo analítico según<br>los resultados de la correlación.<br>-<br>Integración<br>final<br>de<br>las<br>visualizaciones y reportes clínicos en<br>Vimov.<br>- Pruebas unitariasyde integración.|Procesador<br>analítico<br>funcional<br>dentro<br>de<br>Vimov.|
|**Sprint 6 – Validación**<br>**técnica**<br>**y**<br>**pruebas**<br>**internas**|4 semanas|- Ejecución de pruebas controladas en<br>entorno<br>simulado.<br>-<br>Evaluación<br>de<br>precisión<br>y<br>consistencia<br>del<br>sistema.<br>-<br>Ajuste<br>de<br>parámetros<br>del<br>procesador.|Informe de validación<br>técnica (nivel TRL 3).|
|**Sprint**<br>**7**<br>**–**<br>**Documentación**<br>**y**<br>**cierre**|2 semanas|- Elaboración de documentación<br>técnica<br>y<br>manual<br>de<br>usuario.<br>- Consolidación de resultados y<br>verificación<br>de<br>objetivos.<br>- Presentación final del sistema<br>completo.|Reporte<br>final<br>de<br>validación<br>y<br>documentación integral.|



## **4.2. Relación entre fases y objetivos** 

Cada sprint contribuye al cumplimiento de los objetivos específicos planteados en el proyecto. La Tabla 4.2 muestra la correspondencia planeada entre las fases metodológicas y dichos objetivos. 

**Nota:** La distribución presentada corresponde a la planificación inicial del proyecto. La contribución real de cada sprint al cierre se presenta en la Tabla 5.1. 

TABLA 4.2: Fases y objetivos. 

|**Fase / Sprint**|**Objetivo 1: Definir**<br>**protocolo de**<br>**captura**<br>**experimental**|**Objetivo 2: Establecer**<br>**correspondencia con la**<br>**escala MDS-UPDRS**|**Objetivo 3:**<br>**Desarrollar**<br>**módulo integrado**<br>**en Vimov**|**Objetivo 4:**<br>**Validar el**<br>**sistema (TRL**<br>**3)**|
|---|---|---|---|---|
|**Sprint 1 – Análisis**<br>**funcional inicial e**<br>**integración inicial**|✓||✓||
|**Sprint 2 – Diseño**<br>**de**<br>**protocolos**<br>**y**<br>**análisis**<br>**exploratorio**<br>**de**<br>**datos**|✓|✓|||
|**Sprint**<br>**3**<br>**–**<br>**Procesamiento**<br>**y**<br>**análisis de datos**||✓|||
|**Sprint**<br>**4**<br>**–**<br>**Correlación clínica**<br>**e integración de**<br>**visualización**<br>**y**<br>**procesamiento**||✓|✓||
|**Sprint 5 – Ajuste**<br>**del**<br>**procesador**<br>**analíticoy reportes**|||✓||
|**Sprint**<br>**6**<br>**–**<br>**Validación técnica**<br>**y pruebas internas**||||✓|
|**Sprint**<br>**7**<br>**–**<br>**Documentación**<br>**y**<br>**cierre**||||✓|



## **4.3. Cronograma general del proyecto** 

El cronograma general del proyecto se estructuró inicialmente para un período estimado de 26 semanas, considerando la secuencia de fases establecida para el desarrollo de las actividades. Debido a los ajustes y cambios realizados a lo largo de la ejecución del proyecto, el cronograma fue objeto de modificaciones. La versión inicial del cronograma se presenta en el Anexo E, donde se detalla el esquema tipo Gantt correspondiente. 

## **5. DESARROLLO DE LA PROPUESTA** 

Durante el desarrollo del proyecto se trabajó de manera coordinada con el equipo de desarrollo de Vimov e IMUs y la tutora académica. Adicionalmente, se realizó una reunión con el Dr. Orozco, neurólogo de la Fundación Valle del Lili, con el objetivo de validar el protocolo de captura propuesto para las pruebas de golpeteo de dedos y pronación/supinación. En dicha reunión, el Dr. Orozco describió en detalle la forma en que ejecuta ambas pruebas en la práctica clínica, explicando los criterios de evaluación, la ejecución correcta de cada movimiento y los aspectos relevantes para la asignación de scores en la escala MDS-UPDRS. Esta retroalimentación permitió confirmar que el protocolo propuesto era coherente con la práctica clínica real y ajustar criterios de ejecución antes de la fase de captura experimental. A continuación, se describen las actividades realizadas en cada sprint para el cumplimiento de los objetivos específicos planteados (ver Tabla 5.1). Esta distribución refleja la contribución real de cada sprint al cierre del proyecto, la cual difiere parcialmente de la planificación inicial presentada en la Tabla 4.3 debido a los ajustes realizados durante la ejecución. 

TABLA 5.1: Contribución de los sprints a los objetivos. 

|**FASES /**<br>**SPRINTS**|**Objetivo 1: Definir**<br>**protocolo de captura**<br>**experimental**|**Objetivo 2: Establecer**<br>**correspondencia con la**<br>**escala MDS-UPDRS**|**Objetivo 3:**<br>**Desarrollar módulo**<br>**integrado en Vimov**|**Objetivo 4:**<br>**Validar el**<br>**sistema (TRL**<br>**3)**|
|---|---|---|---|---|
|**Sprint 1**|✓||✓||
|**Sprint 2**|✓|✓|||
|**Sprint 3**||✓||✓|
|**Sprint 4**||✓|✓||
|**Sprint 5**||✓|✓||
|**Sprint 6**||✓|✓|✓|
|**Sprint 7**||||✓|



**5.1 Protocolo de captura experimental para las pruebas de golpeteo de dedos y de pronación/supinación** 

Se definió un protocolo de captura para las pruebas de golpeteo de dedos y pronación/supinación con el objetivo de garantizar mediciones consistentes y reproducibles mediante sensores inerciales. El diseño del protocolo se basó en una revisión de literatura científica y en las directrices de la escala MDS-UPDRS Parte III, como se resume en la Tabla 5.2. 

TABLA 5.2: Literatura de protocolos. 

||||
|---|---|---|
|**Componente**|**Autor / Año**|**Aporte principal**|
|**Postura del paciente**|(Kremer et al., 2023)|Comparación de MDS-UPDRS en distintas posturas;<br>mayor confiabilidad en posición sentada|
||(Houdijk et al., 2015)|Ajustes posturales naturales generan variabilidad en<br>movimiento|
||(Stins et al., 2015)|Control postural en bipedestación introduce<br>oscilaciones|
|**Ubicación de IMU**|(di Biase et al., 2018)|IMU en muñeca ofrece mejor captura angular y<br>menor ruido|
||(Höglund et al., 2021)|Zona distal del antebrazo mejora estabilidad de<br>medición|
|**Tipo de Movimiento**|(Goetz et al., 2008)|Define ejecución y criterios clínicos de las pruebas|
|**Sistema de referencia**|(Tomaszewski et al.,<br>2017)|La orientación del sensor afecta la interpretación del<br>movimiento|



Los estudios revisados evidencian tres elementos críticos para la medición con IMUs: postura del paciente, ubicación del sensor y sistema de referencia, los cuales influyen directamente en la calidad de la señal y la comparabilidad de los resultados. 

## **5.1.1. Diseño del protocolo de captura** 

Aunque cada prueba presenta particularidades cinemáticas, comparten tres elementos esenciales mencionados anteriormente: la postura del paciente, el número de repeticiones y la orientación estandarizada del sensor inercial. La diferencia principal entre los protocolos radica en la forma en que se captura el movimiento evaluado mediante sensores inerciales. 

**Postura del paciente:** Se establece la posición sentada como condición estándar del protocolo, ya que reduce la variabilidad asociada a los ajustes posturales necesarios para mantener el equilibrio. En particular, (Kremer et al., 2023) reportan mayor confiabilidad en la aplicación de la escala MDS-UPDRS en esta postura, mientras que (Houdijk et al., 2015) y (Stins et al., 2015) evidencian que la posición de pie introduce oscilaciones asociadas al control postural. 

**Número de repeticiones:** Para ambas pruebas se establecen 10 repeticiones por mano, en concordancia con las directrices de la escala MDS-UPDRS Parte III. Esta decisión mantiene la coherencia con la evaluación clínica y facilita la comparación de resultados. 

**Sistema de referencia de IMUs:** Para garantizar la consistencia en la interpretación de las señales inerciales, se definió un sistema de referencia local asociado a la IMU, en el cual los ejes del sensor (X, Y, Z) se interpretan en función de su orientación respecto a la muñeca del paciente. Dado que la estimación de movimiento depende directamente de la orientación del sensor, se estableció una ubicación consistente del dispositivo entre sesiones (Ver Figura 5.1). Esta decisión se fundamenta en que la orientación del sensor influye directamente en la interpretación del movimiento, como se evidencia en la literatura (Tomaszewski et al., 2017). 

FIGURA 5.1: Sistema de referencia en IMUs. 

## **5.1.2. Protocolo de pronación/supinación** 

**Ubicación del sensor (IMU):** Se define la muñeca como ubicación del sensor, dado que permite una captura más estable del movimiento angular y presenta menor nivel de ruido frente a otras ubicaciones. Esta decisión se apoya en los resultados reportados por (di Biase et al., 2018) y (Höglund et al., 2021), quienes identifican la región distal del antebrazo como una zona adecuada para la medición de este tipo de movimientos. 

**Ejecución de la prueba:** El paciente extiende el brazo al frente y realiza movimientos alternados de pronación y supinación de forma rápida y completa durante 10 repeticiones, conforme a la MDS-UPDRS. 

## **5.1.3. Protocolo de golpeteo de dedos** 

**Ubicación del sensor (IMU):** Inicialmente se consideró la colocación del sensor en los dedos o en el dorso de la mano; sin embargo, esta configuración presentó dos limitaciones prácticas. Por un lado, la carcasa del dispositivo IMU utilizado, dado su tamaño y forma, restringía mecánicamente el rango de movimiento de los dedos al ser fijada sobre ellos, comprometiendo la naturalidad de la ejecución de la prueba. Por otro lado, la señal registrada en esa posición presentó mayor nivel de ruido y artefactos de movimiento, reduciendo la estabilidad de la captura. Por ello, se estandarizó la ubicación en la muñeca (superficie dorsal distal del antebrazo), lo que permite capturar el patrón global del movimiento con mayor estabilidad y replicabilidad entre sesiones. No obstante, esta decisión implica una concesión metodológica relevante para la prueba de golpeteo de dedos: dado que el movimiento principal en esa tarea ocurre en las articulaciones interfalángicas de los dedos, el sensor en la muñeca captura de forma indirecta dicha dinámica, lo que afecta particularmente la discriminabilidad de las métricas de amplitud entre niveles de severidad. Esta limitación se analiza en detalle en la sección 5.4.2. 

**Ejecución de la prueba:** El paciente realiza el contacto repetitivo entre el pulgar y el índice durante 10 repeticiones, tan rápido y amplio como sea posible, conforme a la MDS-UPDRS. 

## **5.1.4 Selección final de pruebas** 

Se evaluaron diferentes pruebas motoras para la captura de movimiento, considerando tanto las pruebas estándar de pronación/supinación y golpeteo de dedos como dos alternativas adicionales propuestas por un especialista clínico de la Fundación Valle del Lili (Dr. Orozco), flexión–extensión de muñeca sin involucrar el antebrazo, y una variación de pronación/supinación con pausa controlada entre ciclos. 

Para cada una se realizaron sesiones exploratorias de captura en 3 participantes sanos, orientadas a evaluar de manera cualitativa la estabilidad de la señal registrada, la claridad del 

patrón de movimiento y la consistencia en la ejecución bajo condiciones experimentales controladas. 

A partir de estas pruebas preliminares se observó que las alternativas propuestas presentaban mayor variabilidad en la ejecución entre participantes y menor correspondencia directa con los ítems estandarizados de la escala MDS-UPDRS Parte III, dificultando la comparación objetiva de resultados. Por el contrario, las pruebas de pronación/supinación y golpeteo de dedos, ejecutadas conforme a las especificaciones clínicas definidas por la escala, generaron señales más consistentes, patrones cinemáticos más claramente identificables y una alineación directa con los criterios clínicos establecidos. 

La selección final se realizó con base en tres criterios: viabilidad experimental, calidad de la señal capturada y la alineación con los ítems oficiales de la escala MDS-UPDRS Parte III. Con base en estos criterios, se definió trabajar únicamente con las pruebas de pronación/supinación y golpeteo de dedos, dado que su correspondencia directa con la escala favorece la replicabilidad del protocolo y su integración con los procesos de evaluación clínica existentes. 

## **5.1.5 Protocolos finales de captura** 

Como resultado de este proceso para el cumplimiento del objetivo específico 1, se definieron los protocolos de captura experimental para ambas pruebas, estableciendo de manera estandarizada las condiciones de ejecución, postura del paciente, ubicación del sensor y número de repeticiones. Estos protocolos constituyen la base metodológica para la adquisición y posterior análisis de las señales registradas. 

## **Protocolo de pronación/supinación** 

Protocolo completo definido para la captura de la prueba de pronación/supinación. Se incluye la representación visual utilizada para la implementación en la aplicación IMUs, donde se ilustra la postura del paciente, la ubicación del sensor inercial en la muñeca y el procedimiento estandarizado de ejecución (ver Figura 5.2). Siempre se inicia con la mano derecha y el paciente solo ejecuta movimiento cuando recibe la indicación del operador. 

## **Instrucciones de ejecución** 

1. Sentar al paciente con la espalda recta y los pies firmes en el suelo. 

2. Solicitar que extienda el brazo hacia el frente, a la altura del hombro, con el codo recto. 

3. Colocar la IMU en la muñeca del brazo evaluado, sobre la superficie dorsal distal del antebrazo. 

4. Indicar al paciente que realice pronación y supinación alternadas de la mano **10 veces** , tan rápido y completamente como pueda. 

5. Realizar la prueba en una mano a la vez. 

6. Verificar que no existan movimientos compensatorios del tronco o del hombro durante la ejecución. 

FIGURA 5.2: Protocolo de pronación supinación. 

## **Protocolo de golpeteo de dedos** 

Protocolo diseñado para la prueba de golpeteo de dedos, incluyendo la adaptación necesaria para el uso con la aplicación móvil IMUs. Se presenta la figura de referencia donde se muestra la fijación del sensor sobre la muñeca, la postura del paciente y las indicaciones para la ejecución de la tarea (ver Figura 5.3). La prueba inicia siempre con la mano derecha y la ejecución depende exclusivamente de la indicación del operador. 

## **Instrucciones de ejecución** 

1. Sentar al paciente en posición estable, con la espalda recta. 

2. Solicitar que eleve la mano evaluada al frente, a nivel de los ojos, manteniendo el codo flexionado aproximadamente a 90°. La prueba inicia siempre con la mano derecha. 

3. Colocar la IMU sobre la superficie dorsal distal del antebrazo, de la mano evaluada. 

4. Indicar al paciente que realice 10 golpes del pulgar contra el dedo índice, tan rápido y ampliamente como sea posible. 

5. Realizar la prueba en una mano a la vez. 

6. Verificar que el paciente no realice movimientos compensatorios del brazo o del tronco. 

FIGURA 5.3: Protocolo de golpeteo de dedos. 

Los protocolos descritos constituyen la base operativa utilizada durante todas las sesiones de adquisición desarrolladas en el proyecto y sirven como referencia para futuras replicaciones experimentales dentro del ecosistema Vimov–IMUs. 

## **5.2 Correspondencia entre las métricas objetivas y la escala MDS-UPDRS** 

Con el fin de apoyar la evaluación clínica de las pruebas motoras definidas en la escala MDS-UPDRS Parte III, se desarrolla un proceso de análisis cuantitativo basado en señales capturadas mediante sensores inerciales (IMUs), el cual permite establecer una relación entre características cinemáticas objetivas y los criterios clínicos utilizados durante la evaluación motora. 

Para ello, se implementan pipelines de procesamiento de señales en Python, integrados posteriormente en la plataforma Vimov, encargados de ejecutar de forma reproducible las etapas de limpieza, transformación, segmentación y análisis de señales provenientes del acelerómetro y giroscopio. A partir de este procesamiento se obtienen métricas cinemáticas y curvas dinámicas que permiten caracterizar cuantitativamente el comportamiento del movimiento durante las pruebas de pronación/supinación y golpeteo de dedos. 

El desarrollo de esta etapa comprende tres componentes principales: 

- La implementación del pipeline de procesamiento y extracción de métricas. 

- La construcción de una línea base (baseline) de referencia para participantes sanos. 

- El desarrollo de modelos analíticos orientados a la clasificación automática de severidad motora según la escala MDS-UPDRS. 

## **5.2.1 Pipeline de procesamiento y extracción de métricas** 

Para el análisis cuantitativo de las señales capturadas mediante IMUs, se implementa un pipeline de procesamiento desarrollado en Python utilizando bibliotecas científicas como NumPy, SciPy y Pandas. Este pipeline se integra posteriormente en la plataforma Vimov y permite ejecutar de forma reproducible las etapas de limpieza, transformación, segmentación y análisis de señales provenientes del acelerómetro y giroscopio. 

El pipeline fue desarrollado inicialmente y validado mediante notebooks en Google Colab, facilitando la experimentación y ajuste de parámetros de procesamiento antes de su integración en el sistema final (ver Figura 5.4). El procesamiento de señales comprende las siguientes etapas: 

FIGURA 5.4: Notebook de procesamiento implementado en Colab 

## **Limpieza y transformación de señales** 

Inicialmente se realiza una validación temporal de las señales capturadas, eliminando registros inconsistentes y ajustando la frecuencia de muestreo a una frecuencia uniforme de 100 Hz mediante interpolación temporal. Esto permite garantizar una base temporal homogénea para todas las capturas. 

Posteriormente, se aplican filtros digitales Butterworth sobre las señales del giroscopio y acelerómetro con el propósito de reducir ruido y eliminar componentes no asociados al movimiento voluntario. En el giroscopio se emplean filtros pasa-banda para conservar únicamente las frecuencias relacionadas con la ejecución motora de las pruebas, mientras que en el acelerómetro se aplican filtros pasa-bajo orientados a suavizar vibraciones de alta frecuencia. 

Adicionalmente, se realiza una detección automática del eje dominante del movimiento mediante análisis de varianza entre los ejes X, Y y Z de la IMU, seleccionando el eje con mayor variabilidad como referencia principal para el análisis cinemático. 

## **Segmentación y análisis del movimiento** 

Una vez acondicionadas las señales, el pipeline realiza la detección automática de ciclos de movimiento mediante identificación de máximos y mínimos en las señales filtradas del giroscopio. A partir de estos eventos se segmentan las repeticiones válidas de cada prueba motora. 

Posteriormente, se aplican criterios de validación para descartar ciclos incompletos o inconsistentes y conservar únicamente las repeticiones más representativas del movimiento. Finalmente, los ciclos detectados son normalizados temporalmente sobre 100 puntos, permitiendo comparar movimientos entre diferentes capturas y participantes independientemente de su duración. 

## **5.2.2 Extracción de métricas cinemáticas** 

A partir de los ciclos segmentados se calculan métricas cinemáticas orientadas a cuantificar características clínicas relevantes del movimiento, tales como amplitud, velocidad, regularidad temporal, hesitaciones y suavidad cinemática. 

Las métricas presentadas en la Tabla 5.3 y la Tabla 5.4 fueron seleccionadas a partir de dos criterios complementarios. En primer lugar, se consideró la correspondencia con los dominios clínicos definidos por la escala MDS-UPDRS Parte III para bradicinesia: amplitud del movimiento, velocidad, regularidad temporal y decremento progresivo. En segundo lugar, se tomó como referencia la literatura previa en cuantificación objetiva de bradicinesia mediante IMUs (Dai et al., 2015; Höglund et al., 2021; Sánchez-Fernández et al., 2023), priorizando métricas con evidencia de discriminabilidad entre niveles de severidad. 

## • **Pronación/supinación** 

Para la prueba de pronación/supinación se calculan 16 métricas principales asociadas al movimiento rotacional de la muñeca (ver Tabla 5.3). 

TABLA 5.3: Métricas Pronación/Supinación 

|**Categoría**|**Métrica**|**Descripción**|
|---|---|---|
|Amplitud|amplitud_media|Media de las amplitudes registradas en cada ciclo de<br>pronación/supinación. Representa qué tan amplio es el<br>movimiento realizado.|
||amplitud_cv|Variabilidad de amplitud entre ciclos consecutivos. Permite<br>identificarpérdida de estabilidad durante la ejecución.|
||amplitud_max|Mayor amplitud alcanzada durante toda laprueba.|
||amplitud_angular_media|Amplitud angular promedio estimada a partir del<br>movimiento rotacional de la muñeca.|
||rango_angular_total|Diferencia entre el máximo y mínimo ángulo registrado<br>durante laprueba.|
|Velocidad|velocidad_pico_media|Promedio de las velocidades máximas alcanzadas en cada<br>ciclo de movimiento.|
||velocidad_pico_max|Mayor velocidad angular registrada durante laprueba.|
||frecuencia|Frecuencia dominante del movimiento calculada a partir<br>de la señal delgiroscopio.|



||cadencia|Número de ciclos ejecutados por segundo durante la<br>prueba.|
|---|---|---|
|Regularidad|regularidad|Estabilidad de amplitud entre ciclos consecutivos. Valores<br>bajos indicanpérdida de ritmo motor.|
|Hesitaciones|n_hesitaciones|Número de interrupciones o pausas detectadas<br>automáticamente durante la secuencia de movimiento.|
|Decremento|decremento_pct|Reducción progresiva de amplitud entre el inicio y final de<br>laprueba.|
|Suavidad|jerk_rms|Métrica utilizada para cuantificar cambios bruscos de<br>aceleración durante el movimiento.|
||jerk_rms_angular|Evalúa cambios abruptos en la velocidad angular del<br>movimiento rotacional.|
|Control motor y<br>compensación|compensacion_lateral|Variabilidad detectada en ejes secundarios del sensor,<br>asociada a movimientos compensatorios.|
||energia_relativa_x|Cantidad de movimiento concentrada en el eje principal<br>respecto a los demás ejes del sensor.|



## • **Golpeteo de dedos** 

Para la prueba de golpeteo de dedos se calculan las siguientes 20 métricas cinemáticas (ver Tabla 5.4): 

TABLA 5.4: Métricas Golpeteo de Dedos 

|**Categoría**|**Métrica**|**Descripción**|
|---|---|---|
|Velocidad|frecuencia|Frecuencia dominante del movimiento calculada a partir de<br>la señal angular del sensor.|
||cadencia|Número de taps ejecutados por segundo durante la<br>prueba.|
||velocidad_pico_media|Promedio de velocidades máximas alcanzadas durante cada<br>tap.|
|Amplitud|amplitud_media|Media de amplitudes registradas entre taps consecutivos.|
||amplitud_cv|Variabilidad de amplitud entre taps consecutivos.|
||amplitud_max|Mayor amplitud registrada durante la prueba.|
||amplitud_angular_media|Amplitud angular promedio estimada a partir del<br>movimiento de golpeteo.|



|Temporalidad|iti_media|Tiempo promedio entre taps consecutivos.|
|---|---|---|
||iti_std|Variabilidad temporal observada entre taps.|
||iti_cv|Coeficiente de variación de los intervalos inter-tap.|
|Regularidad|regularidad|Regularidad de amplitud entre taps consecutivos.|
||regularidad_ritmica|Estabilidad temporal del ritmo de golpeteo durante la<br>prueba.|
|Decremento|decremento_pct|Disminución progresiva de amplitud entre el inicio y final<br>de la secuencia.|
||decremento_pendiente|Tendencia de reducción de amplitud a lo largo del tiempo.|
|Hesitaciones|n_hesitaciones|Número de interrupciones detectadas cuando el tiempo<br>entre taps supera el patrón esperado.|
|Suavidad|jerk_rms|Métrica utilizada para cuantificar cambios bruscos de<br>aceleración durante el movimiento.|
||jerk_rms_angular|Evalúa cambios abruptos en la velocidad angular durante el<br>golpeteo.|
|Control motor y<br>compensación|rms_acc_lateral|Movimiento registrado en ejes secundarios asociado a<br>compensaciones del brazo o muñeca.|
||energia_relativa_dom|Cantidad de energía concentrada en el eje principal del<br>movimiento.|
||compensacion_lateral|Variabilidad detectada en ejes no dominantes del sensor,<br>asociada a movimientos compensatorios.|



## **5.2.3 Línea base (Baseline) de pronación/supinación y golpeteo de dedos** 

Con el propósito de establecer una referencia cuantitativa para el estadio 0 de la escala MDS-UPDRS, se construye una línea base estadística a partir de datos obtenidos de 23 participantes no diagnosticados, con edades entre 20 y 55 años. El tamaño muestral se determina 

aplicando la fórmula de estimación de media poblacional expresada en términos del coeficiente de variación, 𝑛= (𝑧𝛼/2 ⋅𝐶𝑉/𝐸)[2] , con nivel de confianza del 95 % y error admisible del 10 %. Dado que los CV de las métricas calculadas presentan una amplia dispersión desde 1.4 % en la Energía Relativa hasta 52.9 % en la Compensación Lateral, el requerimiento muestral varía considerablemente entre variables. Para las métricas clínicamente más relevantes de esta prueba, como cadencia, duración y frecuencia dominante, los CV se sitúan entre 11 % y 12 %, lo que arroja un requerimiento de entre 5 y 6 participantes; mientras que para métricas de amplitud y velocidad (CV ≈ 25–38 %) el requerimiento asciende a entre 24 y 56 participantes. Los 23 participantes reclutados representan así un equilibrio razonable entre viabilidad experimental y representatividad estadística para el conjunto de métricas primarias de la línea base. 

La adquisición experimental se distribuye de la siguiente manera: 

- 15 participantes entre 20 y 26 años realizan 6 repeticiones de cada prueba. 

- 8 participantes entre 28 y 55 años realizan 4 repeticiones de cada prueba. 

Las señales capturadas son procesadas mediante el pipeline descrito en la sección anterior, permitiendo obtener las métricas cinemáticas y curvas dinámicas correspondientes a cada prueba de pronación/supinación. 

Para cada una de las métricas calculadas se obtienen los siguientes estadísticos descriptivos: 

- Media. 

- Desviación estándar. 

- Percentiles P5 a P95. 

El intervalo comprendido entre los percentiles P5 y P95 se define como rango de normalidad para cada variable cinemática. (Ver Anexo F) 

Como parte del proceso, se desarrolla un notebook en Google Colab que permite actualizar automáticamente la baseline mediante la carga de nuevos archivos de entrada. El sistema genera como salida un archivo JSON integrable en Vimov, utilizado por la plataforma para visualizar rangos de normalidad, curvas dinámicas y resultados cuantitativos asociados a nuevas capturas. 

La baseline desarrollada constituye la referencia cuantitativa utilizada para comparar el comportamiento cinemático de nuevas pruebas y apoyar la interpretación clínica de los diferentes niveles de severidad asociados a la escala MDS-UPDRS. 

## **5.2.4 Modelos analíticos para clasificación de severidad** 

A partir de la baseline construida, se realizan pruebas de laboratorio orientadas a simular condiciones representativas de los estadios 1 a 4 de la escala MDS-UPDRS. Dado que en estas pruebas los participantes no presentaban sintomatología parkinsoniana real, se decidió simular artificialmente la reducción de la amplitud del movimiento y, en el caso del golpeteo de dedos, también el incremento de su variabilidad (CV) como variables adicionales, con el fin de representar de manera más adecuada las diferencias de severidad clínica entre estadios. La intensidad del ajuste se calibró sobre los criterios descriptivos de la escala MDS-UPDRS (factor de reducción de amplitud 0.85 / 0.65 / 0.45 / 0.25 para los scores 1–4, respectivamente, con ruido gaussiano creciente). 

## **Estrategia de validación y modelos evaluados** 

Con base en las señales procesadas y las métricas cinemáticas extraídas, se desarrollan modelos de inteligencia artificial para estimar automáticamente el nivel de severidad asociado a la escala MDS-UPDRS. Su validación se lleva a cabo mediante la estrategia Leave-One-SubjectOut (LOSO), que evalúa la capacidad de generalización sobre participantes no observados durante el entrenamiento, evitando así la fuga de información entre sujetos. 

Durante el desarrollo se evaluaron de forma comparativa dos familias de clasificadores apropiadas para escenarios con un número reducido de sujetos y características numéricas continuas: 

• K-Nearest Neighbors (KNN): clasificador no paramétrico basado en distancias, con búsqueda del hiperparámetro óptimo k ∈ {3, 5, 7, 9, 11} por LOSO y ponderación por distancia. 

• Análisis Discriminante Lineal (LDA) con shrinkage automático, modelo lineal regularizado especialmente adecuado cuando la cantidad de observaciones por sujeto es limitada y el número de features es comparativamente alto. 

## **5.2.4.1 Modelo de pronación / supinación** 

Para la prueba de pronación/supinación se compararon tres configuraciones como se observa en la tabla 5.5: LDA y KNN entrenados sobre el dataset original, y LDA entrenado sobre el dataset clínicamente ajustado. 

TABLA 5.5: Comparación de Modelos Pronación/Supinación 

|**Modelo**|**Accuracy**|**AUC macro**|**AUC weighted**|**F1 macro**|**MCC**|**Acc train**|**Gap**|
|---|---|---|---|---|---|---|---|
|LDA_original|0.6368|0.8830|0.8433|0.6454|0.5272|0.7775|0.1407|



|KNN_original|0.7494|0.9301|0.9187|0.7427|0.6696|1.0000|0.2506|
|---|---|---|---|---|---|---|---|
|LDA_ajustado|0.7340|0.9140|0.8891|0.7463|0.6550|0.8312|0.0972|



Aunque KNN obtuvo el mayor AUC sobre el dataset original, alcanzó un accuracy de entrenamiento de 1.0000 y presentó una brecha considerable entre entrenamiento y validación LOSO (Gap = 0.2506), evidenciando un comportamiento asociado a memorización de patrones específicos de los sujetos de entrenamiento. Este comportamiento resulta consistente con la sensibilidad de los métodos basados en distancias frente a conjuntos de datos pequeños y alta variabilidad inter-sujeto. 

En contraste, LDA con shrinkage entrenado sobre el dataset ajustado mantuvo un gap significativamente menor (0.0972), conservando un desempeño discriminativo elevado. Adicionalmente, obtuvo el mejor equilibrio entre accuracy, AUC macro y F1 macro, mostrando un comportamiento más estable frente a sujetos no observados. 

Las métricas cinemáticas con mayor capacidad discriminativa en esta prueba fueron: cadencia, amplitud media, frecuencia y compensación lateral. 

## **Resultados del modelo final** 

Con base en los resultados obtenidos, se seleccionó LDA con shrinkage sobre el dataset ajustado como modelo final para la prueba de pronación/supinación, obteniendo los siguientes resultados bajo validación LOSO: 

- Accuracy LOSO: 73.40 % 

- AUC macro LOSO: 91.40 % 

- MCC LOSO: 0.6550 

El análisis de estabilidad con múltiples semillas aleatorias, utilizadas en la generación del ruido del ajuste de amplitud, confirma una variabilidad muy baja entre ejecuciones: 

- Accuracy promedio: 74.37 % ± 1.01 % 

- AUC macro promedio: 91.61 % ± 0.32 % 

- MCC promedio: 0.6679 ± 0.0133 

El gap entre entrenamiento y validación LOSO se mantiene en niveles bajos (0.0972 en accuracy y 0.0402 en AUC), lo que, junto con la mínima desviación estándar entre semillas, evidencia un comportamiento estable y un nivel controlado de sobreajuste. En conjunto, estos 

indicadores sugieren una adecuada capacidad de generalización para la estimación de severidad clínica en esta tarea. 

## **5.2.4.2 Modelo de golpeteo de dedos** 

Para la prueba de golpeteo de dedos se evaluaron las mismas configuraciones de clasificación como se observa en la tabla 5.6 utilizando métricas cinemáticas específicas de esta tarea, incluyendo intervalos inter-tap (ITI), decremento y coeficiente de variación de amplitud. 

TABLA 5.6: Comparación de Modelos Golpeteo de Dedos 

|**Modelo**|**Accuracy**|**AUC macro**|**AUC weighted**|**F1 macro**|**MCC**|**Acc train**|**Gap**|
|---|---|---|---|---|---|---|---|
|LDA_original|0.5094|0.7972|0.7750|0.4371|0.3087|0.7812|0.2719|
|KNN_original|0.5312|0.8215|0.8139|0.4259|0.3407|1.0000|0.4688|
|LDA_ajustado|0.5875|0.8497|0.8385|0.5166|0.4309|0.7969|0.2094|



Al igual que en pronación/supinación, KNN presentó un comportamiento de sobreajuste más marcado, alcanzando nuevamente un accuracy de entrenamiento de 1.0000 y el mayor gap entre entrenamiento y validación (0.4688). Este comportamiento refleja una limitada capacidad de generalización frente a nuevos participantes. 

Por su parte, LDA con shrinkage entrenado sobre el dataset ajustado mostró un comportamiento más robusto y estable, reduciendo significativamente el gap de validación y obteniendo mejoras en accuracy, AUC macro y F1 macro respecto a las demás configuraciones evaluadas. 

Las métricas con mayor relevancia para la separación entre niveles de severidad fueron: ITI media, ITI std y cadencia. 

## **Resultados del modelo final** 

Con base en el análisis comparativo, se seleccionó LDA con shrinkage sobre el dataset ajustado como modelo final para la prueba de golpeteo de dedos, obteniendo los siguientes resultados bajo validación LOSO: 

- Accuracy LOSO: 58.75 % 

- AUC macro LOSO: 84.97 % 

El análisis de estabilidad por semilla confirma también una variabilidad muy baja entre ejecuciones: 

- Accuracy promedio: 58.50 % ± 1.02 % 

- AUC macro promedio: 85.10 % ± 0.20 % 

No obstante, el modelo presentó un nivel de sobreajuste superior al observado en pronación/supinación, reflejado en mayores diferencias entre entrenamiento y validación. Este comportamiento se asocia principalmente a la mayor heterogeneidad intra-sujeto de las métricas de tapping y al reducido número de participantes por estadio. 

Aunque estos resultados representan una limitación para aplicaciones clínicas directas, el modelo seleccionado logró reducir de forma importante el sobreajuste respecto a KNN y constituye la configuración más robusta entre las alternativas evaluadas. 

En conjunto, los resultados de ambos modelos demuestran la viabilidad de emplear métricas cinemáticas derivadas de IMUs como apoyo objetivo para la clasificación automática de severidad motora en la escala MDS-UPDRS. Ambos modelos se integran en la plataforma Vimov, permitiendo generar predicciones automáticas a partir de nuevas capturas realizadas mediante la aplicación IMUs como se presenta en el siguiente objetivo desarrollado. 

## **5.3. Desarrollo e integración del módulo en el ecosistema Vimov–IMUs** 

Esta sección describe el proceso de ingeniería para la integración del nuevo módulo de pruebas motoras en la plataforma Vimov e IMUs. Dado que el proyecto se desarrolla sobre una infraestructura preexistente, el trabajo se centró en la caracterización técnica del entorno base y la extensión de sus funcionalidades para soportar las pruebas de pronación/supinación y golpeteo de dedos. 

## **5.3.1 Análisis de la arquitectura base** 

Para garantizar una integración coherente y funcional del nuevo módulo, se realizó un proceso exhaustivo de documentación de la arquitectura preexistente. Este levantamiento técnico permitió comprender el flujo de información y la jerarquía de componentes tanto en la plataforma web como en la aplicación móvil antes de iniciar las modificaciones en el código. 

El análisis arquitectónico se desarrolló utilizando el modelo C4, permitiendo estructurar el ecosistema tecnológico en diferentes niveles de abstracción para identificar dependencias, servicios y componentes críticos para la integración. 

## **Arquitectura de Vimov** 

**Visión Global y Contexto (Nivel 1):** Se documentó cómo el sistema Vimov opera como un núcleo de análisis médico que interactúa con actores externos y servicios de terceros como Auth0 para la gestión de seguridad (ver Anexo G). 

**Arquitectura de Contenedores y Stack Tecnológico (Nivel 2):** En este nivel se identificaron las tecnologías que componen la infraestructura distribuida de Vimov: 

- Plataforma Web: Compuesta por un _frontend_ en React y un servidor _backend_ en Flask (Python) comunicados vía API REST. 

- Procesamiento Asíncrono: Uso de Celery Workers con Redis como _broker_ de mensajes para tareas de alta carga computacional. 

- Persistencia de Datos: Gestión de datos clínicos en PostgreSQL y almacenamiento de objetos (señales y multimedia) en MinIO. Para comprender la estructura de estas bases de datos, se analizó el Modelo Entidad-Relación (MER) (ver Anexo H). 

A continuación, se ilustra la arquitectura de alto nivel que representa el ecosistema tecnológico donde se integró el proyecto (Ver Figura 5.5): 

FIGURA 5.5: Diagrama C4 Nivel 2. 

**Diseño de Componentes (Nivel 3):** Se documentó la lógica interna del servidor web, identificando módulos críticos como el IMUS Module, encargado de canalizar los datos provenientes de los sensores de hardware (ver Anexo I). 

## **Arquitectura de aplicación IMUs** 

Por otro lado, la arquitectura de la aplicación móvil IMUs preexistente se encontraba organizada bajo un enfoque modular basado en capas, separando responsabilidades entre componentes de interfaz, lógica de negocio, comunicación BLE, persistencia y manejo de datos. La estructura del proyecto incluía módulos como screens, viewmodel, repository, bluetooth, network, database y model, permitiendo desacoplar la lógica de captura y procesamiento de las funcionalidades de interfaz y almacenamiento. Esta organización facilitó la extensión de funcionalidades sin afectar el comportamiento general de la aplicación. 

Con el fin de comprender el flujo interno del sistema e identificar los puntos de integración necesarios para las nuevas pruebas motoras, la estructura de la aplicación fue documentada mediante diagramas de clases y flujo de datos (ver Anexos J y K). Estos artefactos técnicos funcionaron como guía para determinar los componentes que debían ser extendidos para 

incorporar las pruebas de pronación/supinación y golpeteo de dedos, así como la adaptación del flujo de captura y envío de datos hacia la plataforma Vimov. 

A continuación, se presenta el diagrama de secuencia correspondiente al flujo de interacción entre los componentes del sistema, el cual detalla la comunicación entre la interfaz de usuario ( _Compose Screen_ ), el DataCollectionViewModel, el IMURepository, el BLEManager, el dispositivo IMU (IMUDevice) y el MeasurementRepository, abarcando desde el inicio de la recolección de datos hasta el guardado y navegación al historial. 

**==> picture [156 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
FIGURA 5.6: Diagrama de secuencia.<br>**----- End of picture text -----**<br>


## **5.3.2 Especificación funcional del módulo** 

Con base en la planeación funcional presentada en el Capítulo 4, la implementación del módulo se desarrolló a partir de las historias de usuario asociadas al objetivo específico 3, orientadas a la integración de nuevas pruebas motoras dentro del ecosistema Vimov–IMUs. El detalle completo de las historias de usuario, junto con sus criterios de aceptación y nivel de prioridad, se presenta en el Anexo B. 

De las 13 historias de usuario definidas para todo el proyecto, siete estuvieron directamente relacionadas con este objetivo, abarcando la incorporación de funcionalidades de captura en la 

aplicación IMUs, el procesamiento de datos, y la visualización de resultados en la plataforma Vimov. Estas actividades fueron realizadas en su totalidad en 4 de los 7 sprints del proyecto, como se encuentra descrito en la Tabla 5.1. 

## **5.3.3 Implementación e integración del sistema** 

La implementación del módulo se desarrolló de manera simultánea sobre los dos componentes principales del ecosistema tecnológico: la aplicación móvil IMUs, encargada de la captura de señales, y la plataforma Vimov, responsable del procesamiento, análisis y visualización de resultados. 

## **Distribución de responsabilidades** 

A continuación, en la Tabla 5.7 se presenta la distribución de roles y responsabilidades del equipo de trabajo. 

TABLA 5.7: Roles y Responsabilidades. 

|**Área / Componente**|**Integrantes**<br>**responsables**|**Actividades principales**|
|---|---|---|
|**Módulo móvil y**<br>**aseguramiento de**<br>**calidad(QA)**|Davide Flamini y<br>Nicolás Cuéllar|Desarrollo integral de la aplicación móvil en Kotlin, incluyendo<br>implementación de funcionalidades, integración con sensores IMUs y<br>validación de calidad del software.|
|**Módulo en**<br>**plataforma Vimov**|Andrés Cabezas|Desarrollo de la plataforma web (Backend y Frontend), incluyendo<br>diseño de prototipos, implementación de funcionalidades y<br>despliegue.|
|**Validación**<br>**transversal**|Davide Flamini,<br>Nicolás Cuéllar y<br>Andrés Cabezas|Ejecución colaborativa de pruebas y validaciones sobre todo el<br>ecosistema para asegurar la estabilidad e integración de los<br>componentes desarrollados.|
|**Revisión y**<br>**aprobación de**<br>**integración en IMUs**|Santiago<br>Barraza y Luisa<br>Pino|Revisión técnica y aprobación de cambios integrados al repositorio<br>principal de la aplicación IMUs|
|**Revisión y**<br>**aprobación de**<br>**integración en**<br>**Vimov**|Leonardo<br>Vargas|Revisión técnica y aprobación de cambios integrados al repositorio<br>principal de la plataforma Vimov|
|**Validación**<br>**funcional**|Nicolás Salazar|Evaluación funcional de IMUs y Vimov brindando retroalimentación<br>técnica sobre usabilidad clínicayvisualización de resultados.|



## **Integración en la aplicación móvil IMUs (Captura de datos)** 

Se realizó la extensión de la aplicación móvil desarrollada en Kotlin, incorporando las pruebas motoras de pronación/supinación y golpeteo de dedos. La integración se realizó directamente sobre el repositorio IMUs-App-Arduino del grupo de investigación i2t, reutilizando la lógica existente de captura, comunicación con sensores y persistencia de datos, y extendiéndola para soportar las nuevas pruebas clínicas definidas en la MDS-UPDRS. 

Las principales modificaciones se realizaron en los siguientes niveles de la arquitectura: 

**Capa de interfaz (UI/Screens):** Se incorporaron nuevas pantallas para la ejecución guiada de las pruebas de pronación/supinación y golpeteo de dedos, reutilizando el sistema de navegación existente basado en NavHost y componentes de UI. 

**Capa de control y lógica de presentación (ViewModel):** La modificación principal consistió en incorporar la lógica asociada a la funcionalidad Cambiar mano, permitiendo gestionar la transición entre la captura de la mano derecha y la izquierda dentro de un único registro, sin alterar el flujo base de adquisición ya implementado en la aplicación. 

**Capa de datos y comunicación:** Se adaptó la estructura de generación de archivos JSON incorporando el campo _handTransitionTimestamp_ , destinado a registrar el momento de cambio entre la ejecución de la mano derecha y la mano izquierda. Este marcador temporal permitió segmentar de forma precisa ambas fases de la captura durante el procesamiento posterior en Vimov, garantizando una separación consistente de las señales asociadas a cada extremidad. Una vez finalizada la captura, los registros generados son enviados automáticamente a la plataforma Vimov para su almacenamiento y posterior procesamiento. 

En la Figura 5.7 se presentan las principales pantallas desarrolladas, las cuales ilustran el flujo de interacción de la aplicación durante la ejecución y captura de las pruebas motoras. 

FIGURA 5.7: Flujo de IMUs. 

## **Integración en la plataforma Vimov (Diseño, Procesamiento y Orquestación)** 

El trabajo sobre el ecosistema Vimov abarcó la extensión de la arquitectura del sistema tanto en la lógica del servidor (Backend) como en la interfaz visual (Frontend), con el objetivo de soportar el análisis avanzado de las nuevas pruebas motoras. 

**Diseño e Implementación de Frontend (React):** Como fase previa al desarrollo de la interfaz, se construyeron prototipos de media fidelidad en la herramienta Figma (Ver Anexo L). para planificar la experiencia de usuario y la presentación de la información. Posteriormente, estos diseños se materializaron mediante la creación de nuevos componentes en React. Esto permitió construir paneles (dashboards) interactivos para las pruebas de pronación/supinación y golpeteo de dedos (Ver Figura 5.8). 

**==> picture [130 x 9] intentionally omitted <==**

**----- Start of picture text -----**<br>
FIGURA 5.8: Pantalla de Vimov.<br>**----- End of picture text -----**<br>


Estos paneles presentan las señales capturadas mediante gráficas temporales y espectrales, junto con su comparación frente a bandas de referencia de sujetos sanos, facilitando la interpretación del desempeño del paciente. Adicionalmente, se integró una sección de predicción basada en un modelo LDA que muestra la clasificación estimada según la escala MDSUPDRS y las probabilidades asociadas a cada nivel de severidad, constituyendo un apoyo cuantitativo para la interpretación clínica de los resultados. 

**Procesamiento y Backend (Python):** Se implementó un motor de procesamiento digital de señales (DSP) en Python. Siguiendo principios de escalabilidad y el patrón de diseño orientado a objetos Processor, se orquestó una arquitectura basada en clases especializadas para cada tipo de prueba motora (PronationSupinationProcessor y FingerTappingProcessor). Estas clases son responsables de realizar el filtrado de ruido, la detección de ciclos de movimiento de forma adaptativa, la extracción de métricas biomecánicas (como velocidad, ritmo, amplitud y decremento), y la evaluación del estado mediante modelos de predicción, el cual fue desarrollado en el objetivo específico 2 de este proyecto basados en Análisis Discriminante Lineal (LDA), entrenados para estimar niveles de severidad en correspondencia con la escala clínica MDS-UPDRS. 

**Gestión de Versiones, Orquestación y Reproducibilidad:** Para llevar a cabo el desarrollo de manera segura y concurrente sin afectar el código base, se realizó un fork del repositorio original del proyecto Vimov. Durante el ciclo de desarrollo, se ejecutaron sincronizaciones 

periódicas (mediante operaciones pull) desde el repositorio principal, garantizando una integración fluida y mitigando conflictos de código. Además, todo el entorno de la plataforma se configuró mediante la orquestación de contenedores a través de Docker y Docker Compose. Esta estrategia de infraestructura como código permitió levantar el sistema de manera aislada, asegurando la total reproducibilidad del entorno de ejecución y facilitando las pruebas de integración. 

## **5.3.4 Validación técnica del sistema** 

Con el fin de garantizar la calidad y correcto funcionamiento del sistema, se realizaron pruebas sobre la aplicación móvil basada en IMUs y la plataforma Vimov, evaluando tanto los componentes individuales como la integración del flujo completo de datos. 

Esta etapa corresponde a la verificación interna de la solución tecnológica desde la perspectiva de ingeniería de software. La validación experimental del sistema en entorno controlado, orientada a establecer su nivel de madurez tecnológica (TRL 3), se presenta posteriormente en la Sección 5.4. 

Se establecieron dos criterios de aceptación para esta etapa: primero, que el 100% de las pruebas ejecutadas debían pasar exitosamente; segundo, que la cobertura funcional debía superar el 80% sobre los componentes desarrollados. Ambos criterios fueron alcanzados en su totalidad en las dos plataformas evaluadas. 

## **Validación en la aplicación móvil IMUs** 

Las pruebas realizadas sobre la aplicación móvil estuvieron orientadas a verificar la estabilidad funcional del proceso de captura, la correcta interacción con los sensores inerciales y el comportamiento de la interfaz de usuario durante la ejecución de las pruebas motoras. 

Para la app móvil IMUs, las pruebas se ejecutaron sobre la pila de herramientas estándar del ecosistema Android/Kotlin: JUnit 4 como motor principal, AndroidX Test para la integración con el entorno Android, MockK para simulación de dependencias, Robolectric para ejecutar pruebas dependientes del framework Android directamente en la JVM, Kotlinx Coroutines Test y Turbine para la validación de código asíncrono y flujos reactivos, y Compose UI Test junto con Espresso para las pruebas de interfaz de usuario. Las pruebas unitarias se organizaron en app/src/test/ y las pruebas de instrumentación en app/src/androidTest/. 

Se ejecutaron un total de 234 pruebas técnicas, alcanzando una cobertura funcional del 83% sobre los componentes desarrollados, superando el criterio de aceptación establecido del 80%. El 17% restante no cubierto corresponde principalmente a componentes preexistentes de 

la aplicación que no fueron modificados durante el desarrollo del proyecto y que por tanto quedaron fuera del alcance de las pruebas, así como a elementos inherentes al lenguaje y al framework utilizados cuya cobertura no es instrumentable directamente. Alcanzar una cobertura del 100% no es un objetivo estándar en proyectos de ingeniería de software, dado que ciertos componentes de infraestructura, inicialización del sistema y código generado automáticamente por el entorno de desarrollo escapan al control directo del equipo. La distribución de estas pruebas se presenta en la Tabla 5.8. 

TABLA 5.8: Pruebas técnicas para app móvil IMUs. 

|**Tipo de pruebas**|**Cantidad**|**Propósito de validación**|**Resultado**|
|---|---|---|---|
|**Regresión**|122|Validación de estabilidad<br>funcional frente a<br>modificaciones del<br>sistema|100% aprobadas|
|**Unitarias**|48|Verificación del correcto<br>funcionamiento de la<br>lógica de empaquetado y<br>serialización de datos|100% aprobadas|
|**Instrumentadas**|64|Evaluación del<br>comportamiento de<br>interfaz, interacción con<br>hardware y flujo de<br>captura|100% aprobadas|
|**Total**|**234**|Validación integral de la<br>aplicación móvil|100% aprobadas|



## **Validación de la plataforma Vimov** 

Las pruebas ejecutadas sobre la plataforma web Vimov estuvieron orientadas a comprobar el correcto funcionamiento de los componentes desarrollados en frontend y backend, 

verificando la estabilidad de la visualización clínica, el procesamiento analítico de señales y la integración funcional entre los distintos módulos del sistema. 

Para la plataforma Vimov, el backend en Python utilizó pytest como framework principal de ejecución, con pytest-cov para la generación de reportes de cobertura, organizando las pruebas en directorios separados para pruebas unitarias (tests/unit/) e integración (tests/integration/). El frontend en React utilizó Vitest como motor de pruebas, jsdom como entorno de simulación del navegador y @testing-library/react para la validación de componentes centrada en el comportamiento del usuario. 

Se ejecutaron 286 pruebas unitarias, alcanzando una cobertura del 96% en los componentes desarrollados, superando el criterio de aceptación establecido del 80%. El 4% restante no cubierto corresponde, al igual que en la aplicación móvil, a componentes preexistentes que no fueron modificados durante el proyecto y a elementos inherentes al lenguaje y framework utilizados cuya cobertura no es instrumentable directamente. La distribución se presenta en la Tabla 5.9. 

TABLA 5.9: Pruebas técnicas para la plataforma Vimov. 

|**Tipo de prueba**|**Cantidad**|**Propósito de validación**|**Resultado**|
|---|---|---|---|
|**Regresión**|53|Comprobación de<br>estabilidad funcional<br>frente a modificaciones<br>realizadas sobre la<br>plataforma|100% aprobadas|
|**Unitarias**|161|Verificación del<br>funcionamiento individual<br>de componentes de<br>procesamiento,<br>visualización y lógica de<br>negocio|100% aprobadas|
|**Integración**|72|Validación de la<br>comunicación entre<br>frontend, backendy|100% aprobadas|



|||servicios asociados para<br>la consulta y visualización<br>de resultados||
|---|---|---|---|
|**Total**|**286**|Validación funcional<br>integral de la plataforma|100% aprobadas|



## **5.3.4 Resultado de la validación técnica** 

En conjunto, los resultados obtenidos permitieron verificar la robustez técnica del sistema desarrollado, evidenciando un funcionamiento consistente tanto en la etapa de captura de datos en la aplicación móvil como en el procesamiento y presentación de resultados dentro de la plataforma Vimov. 

Adicionalmente, se realizó una validación funcional con el stakeholder Nicolás Salazar, investigador del grupo i2t con conocimiento tanto en desarrollo de la plataforma Vimov como en el ámbito clínico asociado al proyecto. La sesión consistió en una prueba de uso libre en la que se le entregó acceso directo a la aplicación móvil IMUs y a la plataforma Vimov, solicitándole que evaluara el sistema de manera general simulando el rol de personal clínico, dado su conocimiento del contexto médico. Los aspectos evaluados incluyeron el flujo de captura de pruebas motoras, la experiencia de usuario durante la interacción con la aplicación móvil, la visualización de métricas en Vimov, la interpretación de los resultados clínicos generados y la integración funcional entre ambas plataformas. 

En la aplicación móvil, la retroalimentación fue positiva en cuanto a la transmisión de datos y la claridad de las instrucciones presentadas al usuario durante la ejecución de las pruebas. La principal observación estuvo relacionada con la experiencia de usuario durante el cambio de mano entre pruebas, ya que el flujo de interacción no resultaba completamente intuitivo. Sin embargo, esta decisión se tomó deliberadamente para minimizar modificaciones sobre la lógica y componentes preexistentes de la aplicación, siguiendo las recomendaciones del equipo desarrollador original de IMUs (Santiago Barraza y Luisa Pino), con el fin de facilitar el mantenimiento y la continuidad del sistema. 

En cuanto a la plataforma Vimov, las observaciones se centraron en dos aspectos principales. Primero, la cantidad de información presentada: se recomendó priorizar las gráficas y métricas de mayor relevancia clínica, evitando saturar la interfaz con información secundaria que pudiera dificultar la interpretación por parte del personal médico. Segundo, el uso de filtros de señal: se advirtió sobre el riesgo de aplicar filtros excesivamente agresivos, ya que podrían 

eliminar componentes de la señal asociados a manifestaciones propias de la enfermedad, comprometiendo la validez clínica de los resultados. A partir de esta retroalimentación se implementaron ajustes técnicos que incluyeron la recalibración de parámetros de referencia, la optimización de algoritmos de extracción de métricas motoras, la actualización de los modelos de clasificación automática y la reorganización jerárquica de la visualización clínica. 

## **5.4. Validación del sistema mediante pruebas internas en laboratorio (TRL 3)** 

El cuarto objetivo del proyecto corresponde a la validación preliminar del sistema en condiciones controladas de laboratorio. Este proceso se alinea con el nivel de madurez tecnológica TRL 3, el cual implica la demostración experimental del concepto en un entorno controlado, sin requerir aún la participación de pacientes diagnosticados ni validación clínica formal. 

La pregunta de investigación que orienta este objetivo es: ¿pueden las IMUs colocadas en el dorso de la mano capturar las dimensiones biomecánicas definidas por la MDS-UPDRS (velocidad, amplitud, irregularidad e interrupciones) de forma consistente y con coherencia clínica suficiente para justificar una validación formal en fases posteriores? 

## **5.4.1. Diseño experimental** 

## **Participantes y estructura del dataset** 

Participaron 26 personas en total, organizadas en dos grupos según su rol en el estudio. 

El Grupo A (Score 0) estuvo conformado por 23 personas no diagnosticadas, descritas en detalle en el objetivo anterior. Para efectos de este análisis, ese tamaño muestral es suficiente en el contexto TRL 3 por dos razones: primero, aporta entre 132 y 149 pruebas válidas tras el control de calidad, proporcionando una distribución de referencia de normalidad con masa estadística suficiente para el análisis Kruskal-Wallis en un diseño desbalanceado; segundo, con N≈20 sujetos independientes en Score 0 el poder estadístico del test es adecuado para detectar efectos grandes (eta² > 0.14) que es el umbral relevante para este nivel de madurez tecnológica. 

El Grupo B (Scores 1–4) estuvo compuesto por los 3 integrantes del proyecto de grado, quienes simularon cada nivel de severidad siguiendo los criterios conductuales oficiales de la MDS-UPDRS. El N=3 es coherente con el propósito TRL 3: en esta etapa el objetivo no es la inferencia poblacional sino demostrar que el sistema detecta señal biomecánica real. Con N=3 el poder estadístico es aproximadamente del 25%, insuficiente para conclusiones clínicas definitivas pero suficiente para detectar efectos grandes. La lógica es directa: si el sistema no detecta diferencias con efectos grandes en N=3, no tiene sentido escalar el estudio; si las detecta, la evidencia justifica la inversión en una validación clínica formal con pacientes reales en TRL 4. La simulación fue asistida por una aplicación de guía sonora (ver Anexo M) que controló el BPM por score y generó pausas en posiciones aleatorias dentro del rango válido por score, garantizando que cada prueba fuera biomecánicamente distinta sin seguir un patrón memorizado. 

Es importante señalar que, dado el carácter exploratorio y el nivel de madurez tecnológica del estudio (TRL 3), no se implementó un proceso formal de consentimiento informado escrito ni se sometió el protocolo a revisión por un comité de ética institucional. Los participantes del Grupo A fueron informados verbalmente sobre el propósito del estudio y la naturaleza de las tareas antes de su participación, y ninguno de ellos presentaba condiciones de salud que pudieran representar un riesgo. Para fases posteriores de validación clínica (TRL 4 en adelante), que involucren pacientes diagnosticados con enfermedad de Parkinson, será obligatorio contar con aprobación de un comité de ética institucional, consentimiento informado escrito y un protocolo de investigación formal enmarcado en los lineamientos del grupo i2t y la Fundación Valle del Lili. 

## **Justificación del número de pruebas por sujeto** 

Cada integrante del Grupo B realizó 10 pruebas por score por mano, para un total de 20 pruebas por persona por score. Este número responde a un equilibrio entre tres restricciones. Primero, la estabilidad de la mediana intrasujeto: con menos de 8 pruebas la mediana es vulnerable a valores atípicos producidos por errores de ejecución o fallas de captura, mientras que con 10 pruebas converge a una estimación representativa del comportamiento motor del sujeto en ese score. Segundo, la fatiga motora: en scores altos la simulación de movimiento lento con pausas exige un esfuerzo sostenido que compromete la calidad biomecánica de las pruebas a partir de las 12-15 repeticiones consecutivas. Tercero, el tiempo de adquisición: 10 pruebas por mano por score representan aproximadamente 4-5 horas de sesión por integrante incluyendo descansos, que es el límite razonable para mantener la calidad uniforme de todas las pruebas. 

Tras el control de calidad, el dataset final quedó conformado por 320 pruebas válidas de 20 sujetos únicos para Golpeteo de dedos, y 391 pruebas válidas de 21 sujetos únicos para Pronación/Supinación. La reducción respecto a los 23 sujetos reclutados en el Grupo A se debe a que algunos archivos no pasaron los filtros de calidad por fallas en la extracción de picos o duración insuficiente. La Tabla 5.10 presenta la composición final del dataset después del proceso de control de calidad, desagregada por tipo de prueba y nivel de severidad (score MDSUPDRS). 

TABLA 5.10: Composición del dataset después del control de calidad. 

||**Prueba**|**Score 0**|**Score 1**|**Score 2**|**Score 3**|**Score 4**|**Total**<br>**válidas**|**Sujetos**<br>**únicos**|
|---|---|---|---|---|---|---|---|---|



|**Golpeteo de dedos**|132 / 19<br>sanos|50 / 3|44 / 3|47 / 3|47 / 3|320|20|
|---|---|---|---|---|---|---|---|
|**Pronación/Supinación**|149 / 20<br>sanos|59 / 3|61 / 3|62 / 3|60 / 3|391|21|



## **Extracción de características** 

A partir de las señales del giroscopio y el acelerómetro se extrajeron las características cinemáticas descritas en el objetivo anterior: 18 para Golpeteo de dedos y 14 para Pronación/Supinación, organizadas en las dimensiones biomecánicas de temporización, amplitud, dinámica, regularidad y compensación lateral. Para Golpeteo de dedos se incluyeron además variables de intervalo entre golpeteos y hesitaciones, que no aplican a Pronación/Supinación dado que la tarea de rotación del antebrazo no produce pausas intermitentes comparables a las del golpeteo de dedos. 

## **Limitaciones declaradas del diseño** 

Los Scores 1–4 cuentan con N=3 sujetos independientes por grupo, lo que limita el poder estadístico del análisis inferencial a aproximadamente el 25%. Por esta razón, los hallazgos en comparaciones entre scores simulados deben interpretarse como evidencia exploratoria, no confirmatoria. Las 10 pruebas por sujeto por score no son estadísticamente independientes entre sí y se manejan mediante agregación por sujeto antes del análisis inferencial, evitando la pseudoreplicación. 

Adicionalmente, la simulación replica los criterios conductuales de la escala, pero no los mecanismos neurológicos reales del Parkinson. La bradicinesia en pacientes con EP es consecuencia de la disfunción dopaminérgica en los ganglios basales, lo que produce alteraciones en la iniciación, escalado y modulación del movimiento que no pueden reproducirse voluntariamente por personas sanas. En particular, fenómenos como el decremento progresivo de amplitud involuntario, la fatigabilidad patológica y las fluctuaciones motor ON/OFF asociadas al tratamiento farmacológico están ausentes en la simulación. Por esta razón, los patrones cinemáticos capturados en Scores 1–4 pueden diferir cualitativamente de los observados en pacientes reales, especialmente en scores intermedios (2 y 3) donde la expresión clínica es más variable. Esta limitación es inherente al nivel TRL 3 y constituye la principal motivación para avanzar hacia una validación con pacientes reales en TRL 4. 

## **5.4.2. Consistencia de las señales capturadas** 

Antes del análisis inferencial formal, la inspección visual de las distribuciones por score permite identificar qué dimensiones biomecánicas el sensor captura de forma consistente y cuáles presentan limitaciones. La comparación entre ambas pruebas revela un patrón sistemático que se atribuye principalmente a la posición del sensor respecto a la articulación evaluada. 

## **Pronación/Supinación** 

En Pronación/Supinación las señales son coherentes en todas las dimensiones evaluadas (Ver Figura 5.9). La cadencia muestra un descenso limpio y progresivo de Score 0 a Score 4. La amplitud media sube levemente en Score 1 (consistente con el esfuerzo compensatorio inicial descrita clínicamente) y luego desciende de forma monotónica hasta Score 4. La raíz cuadrática media del jerk (jerk RMS) y la velocidad pico media presentan el mismo patrón descendente progresivo. Todas las características cuentan la misma historia biomecánica: el movimiento se vuelve más lento, menos amplio y brusco a medida que aumenta la severidad, en correspondencia directa con los criterios de la MDS-UPDRS. Este comportamiento es esperable dado que la IMU colocada en el dorso de la mano captura directamente la rotación del antebrazo, que es la articulación principal involucrada en la tarea. La señal del giroscopio en el eje de rotación refleja con fidelidad tanto la amplitud como la dinámica del movimiento evaluado. 

FIGURA 5.9: Evolución de variables clave score - Pronación/Supinación. 

## **Golpeteo de dedos** 

En Golpeteo de dedos el panorama es distinto (Ver Figura 5.10). Las características de temporización (cadencia e ITI media) mantienen tendencias monotónicas claras y discriminativas, con buena separación entre grupos. Sin embargo, las dimensiones de amplitud y dinámica presentan comportamientos que no son coherentes clínicamente. 

La amplitud media registra H=0.73 y eta²=0.000 en el análisis inferencial, siendo la característica con menor poder discriminativo de las 18 extraídas. La inspección visual confirma una distribución prácticamente plana sin tendencia entre scores, con Score 2 registrando valores medios superiores a Score 1, lo cual es biomecánicamente inconsistente con la escala. 

La raíz cuadrática media del jerk presenta un patrón igualmente problemático: la caída entre Score 0 y Score 1 es drástica, pero de Score 1 a Score 4 la señal es prácticamente cero y plana, sin gradación entre niveles de severidad. Esto significa que el jerk discrimina la transición sano-enfermo, pero no gradúa la severidad dentro de la enfermedad bajo el protocolo actual. 

La hipótesis que explica estos problemas de forma unificada es la posición del sensor. En Golpeteo de dedos el movimiento principal es la flexión de los dedos, que ocurre en las articulaciones interfalángicas e involucra desplazamientos angulares pequeños y distales. La IMU colocada en el dorso de la mano registra principalmente el movimiento del metacarpo, que es indirecto respecto a la tarea evaluada. A diferencia de Pronación/Supinación, donde el sensor está sobre la articulación que se mueve, en Golpeteo de dedos el sensor está en una posición subóptima para capturar la dinámica del golpeteo de dedos. 

Esta limitación no invalida la utilidad del sistema para Golpeteo de dedos (la temporización sigue siendo discriminativo porque cadencia e intervalo medio entre golpes reflejan el ritmo del movimiento independientemente de la amplitud) pero sí identifica una dirección prioritaria de mejora para fases futuras: evaluar posiciones alternativas del sensor, como la falange proximal o el dedo índice, más directamente acopladas al movimiento evaluado. 

**==> picture [316 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
FIGURA 5.10: Evolución de variables clave por score - Golpeteo de dedos.<br>**----- End of picture text -----**<br>


## **5.4.3. Análisis inferencial — Kruskal-Wallis** 

Para evaluar si las características capturadas presentan diferencias estadísticamente significativas entre niveles de severidad, se aplicó la prueba de Kruskal-Wallis sobre datos agregados por sujeto mediante la mediana, operando sobre N=20 sujetos independientes para Golpeteo de dedos y N=21 para Pronación/Supinación. Se utilizó corrección de Bonferroni para controlar el error tipo I (falso positivo: concluir que existe diferencia entre grupos cuando en realidad no la hay) en comparaciones múltiples, con umbrales de α=0.0028 para Golpeteo de dedos (18 comparaciones) y α=0.0036 para Pronación/Supinación (14 comparaciones). En la Tabla 5.11 se presentan los resultados del análisis inferencial mediante Kruskal–Wallis para las características con tamaño de efecto grande (Eta² > 0.14), diferenciados por tipo de prueba. 

**Nota:** Eta² > 0.14 indica efecto grande. La significancia se reporta como ✓ para p < 0.05; ✓ ★ para significancia tras corrección de Bonferroni. — indica que la variable no está 

disponible en esa prueba o no alcanza efecto grande. Golpeteo de dedos (GD). Pronación/Supincación (PS) 

TABLA 5.11: Resultados del análisis Kruskal-Wallis (características con efecto grande). 

|**Característica**|**GD – H**|**GD – Eta²**|**GD – Significancia**|**PS – H**|**PS – Eta²**|**PS – Significancia**|
|---|---|---|---|---|---|---|
|iti_std|20.33|0.628|✓★|—|—|—|
|jerk_rms|18.34|0.552|✓★|16.75|0.472|✓★|
|iti_media|17.61|0.524|✓★|—|—|—|
|cadencia|17.61|0.524|✓★|19.00|0.556|✓★|
|compensacion_lateral|13.93|0.382|✓|8.43|0.164|—|
|frecuencia|12.33|0.320|✓|16.95|0.480|✓★|
|iti_cv|10.25|0.241|✓|—|—|—|
|jerk_rms_angular|9.65|0.217|✓|16.17|0.451|✓★|
|amplitud_media|0.73|0.000|—|11.64|0.283|✓|
|velocidad_pico_media|4.72|0.028|—|11.64|0.283|✓|



En Golpeteo de dedos, las características de temporización presentan los mayores tamaños de efecto (Ver Figura 5.11): desviación estándar del intervalo entre golpeteos (eta²=0.628), la raíz cuadrática media del jerk (eta²=0.552), ITI media y cadencia (eta²=0.524 ambas), todas con significancia Bonferroni. Las características de amplitud (amplitud media, amplitud máxima y amplitud angular media) no alcanzan ningún efecto discriminativo (eta²=0.000 en los tres casos), resultado consistente con la limitación de posición del sensor descrita en la sección anterior. En total, 8 de 18 variables alcanzan significancia nominal y 4 de 18 alcanzan significancia con corrección Bonferroni. 

FIGURA 5.11: Top 4 variables discriminativas - Golpeteo de dedos. 

En Pronación/Supinación (Ver Figura 5.12), las cuatro características con significancia Bonferroni son cadencia (eta²=0.556), frecuencia (eta²=0.480), jerk RMS (eta²=0.472) y jerk RMS angular (eta²=0.451). La amplitud media y la velocidad pico media alcanzan efecto grande pero no significancia con corrección estricta (eta²=0.283), lo que indica discriminabilidad nominal con insuficiente poder estadístico dado el N=3 en scores simulados. En total, 8 de 14 variables alcanzan significancia nominal y 4 de 14 alcanzan significancia con corrección Bonferroni. 

FIGURA 5.12: Top 4 variables discriminativas – Pronación/Supinación. 

En conjunto, los resultados confirman que el sistema captura de forma robusta las dimensiones de temporización y dinámica definidas por la MDS-UPDRS, con tamaños de efecto grandes y consistentes entre ambas pruebas. La dimensión de amplitud en Golpeteo de dedos queda pendiente de evaluación bajo un protocolo con control externo en fases futuras. 

## **5.4.4. Análisis de correlación con la severidad** 

Para evaluar si la relación entre las características extraídas y el score clínico presenta un comportamiento monotónico (condición necesaria para su potencial uso como variables sustitutas de la severidad) se calculó el coeficiente de correlación de Spearman entre cada característica y el score MDS-UPDRS, utilizando el conjunto de datos completo para cada tipo de prueba. 

En la Figura 5.13 se presenta la correlación de Spearman entre las características extraídas y el score MDS-UPDRS para la prueba de Golpeteo de dedos, permitiendo evaluar la relación monotónica entre las variables y la severidad clínica. 

FIGURA 5.13: Correlación de Spearman feature vs score - Golpeteo de dedos. 

En Golpeteo de dedos las cinco correlaciones más fuertes son jerk RMS (ρ=−0.775, p<0.001), cadencia (ρ=−0.733, p<0.001), ITI media (ρ=+0.733, p<0.001), compensación lateral (ρ=−0.683, p<0.001) e y desviación estándar del ITI (ITI std) (ρ=+0.671, p<0.001). El signo de estas correlaciones es clínicamente coherente: a mayor severidad el movimiento es más lento (cadencia e ITI media), más irregular (ITI std) y menos brusco (jerk RMS negativo), correspondiendo directamente con los criterios de bradicinesia descritos en la MDS-UPDRS. La compensación lateral negativa indica que a mayor severidad el movimiento pierde excursión lateral, también consistente con la escala. 

Para Pronación/Supinación las correlaciones de Spearman son igualmente coherentes en signo y dirección (Ver Figura 5.14), con cadencia y frecuencia liderando el ranking, confirmando que el sensor captura el enlentecimiento progresivo del movimiento rotacional con fidelidad. 

FIGURA 5.14: Correlación de Spearman feature vs score - Pronación/Supinación. 

Estas correlaciones, junto con los tamaños de efecto del análisis Kruskal-Wallis, constituyen la evidencia principal de que el sistema captura información biomecánicamente relevante y alineada con los criterios clínicos, que es la pregunta central de este objetivo TRL 3. 

## **5.4.5. Capacidad discriminativa preliminar** 

Como evidencia complementaria de que las características capturadas contienen información suficiente para separar niveles de severidad, se entrenó un clasificador de análisis discriminante lineal (LDA) con regularización tipo _shrinkage_ (solver = lsqr, parámetro de _shrinkage_ = 0.95) como herramienta exploratoria, evaluado mediante validación Leave-OneSubject-Out (LOSO), estrategia que excluye un sujeto completo (incluyendo ambas manos) en cada división (fold), garantizando evaluación sobre participantes no observados durante el entrenamiento. El objetivo de este análisis no es optimizar un modelo de clasificación sino 

verificar que la separabilidad en el espacio de variables es real y no artefactual. En la Tabla 5.12 se resumen las métricas de desempeño del modelo LDA para ambas pruebas motoras. 

TABLA 5.12: Resultados LDA LOSO. 

|**Prueba**|**Accuracy**|**AUC macro**|**F1 macro**|**MCC**|**Gap**<br>**Accuracy**|
|---|---|---|---|---|---|
|Golpeteo de dedos|0.509|0.797|0.437|0.309|0.272|
|Pronación/Supinación|0.637|0.883|0.645|0.527|0.141|



En la prueba de Pronación–Supinación, el modelo LDA alcanza un AUC macro de 0.883 y un MCC de 0.527, con una brecha moderada entre la exactitud en entrenamiento y evaluación (0.141), lo que indica que las variables capturan variabilidad real entre niveles de severidad y presentan una buena capacidad de generalización. El análisis por clase muestra que el Score 3 alcanza un recall de 0.95 y el Score 4 una precisión de 0.92, mientras que el Score 2 presenta la mayor ambigüedad clasificatoria (recall de 0.39), comportamiento consistente con la variabilidad clínica documentada en la escala MDS-UPDRS, donde los niveles intermedios tienden a presentar mayor desacuerdo entre evaluadores. 

En la prueba de Golpeteo de dedos, el AUC es de 0.797 y el MCC de 0.309, con una mayor brecha entre entrenamiento y evaluación (0.272), lo que sugiere un mayor grado de sobreajuste, coherente con la mayor variabilidad entre clases atribuible a la limitación en la posición del sensor previamente descrita. El Score 4 mantiene una precisión de 0.90, indicando que el sistema raramente confunde otros niveles con el estado más severo, mientras que el Score 2 presenta un recall de 0.09, constituyendo el nivel de mayor dificultad discriminatoria. 

Ambos resultados son suficientes para el propósito TRL 3: demuestran que el sensor captura información discriminativa real sin pretender que el modelo sea clínicamente desplegable en esta etapa. 

## **5.4.6. Conclusiones de la validación TRL 3** 

Los resultados permiten responder afirmativamente la pregunta de investigación de este objetivo. El sistema basado en IMUs captura de forma consistente y biomecánicamente coherente las dimensiones de temporización y dinámica definidas por la MDS-UPDRS, con tamaños de efecto grandes (eta² entre 0.45 y 0.63) en ambas pruebas, y correlaciones monotónicas fuertes con la severidad en Golpeteo de dedos (ρ entre 0.67 y 0.78). 

Se identificaron tres hallazgos que orientan el desarrollo futuro. Primero, la posición del sensor en el dorso de la mano es adecuada para Pronación/Supinación, pero subóptima para 

Golpeteo de dedos, donde la flexión de dedos produce señales de amplitud y dinámica indirectas y poco discriminativas entre niveles de severidad. Segundo, la dimensión de amplitud en Golpeteo de dedos requiere control externo en fases posteriores para ser evaluable. Tercero, el jerk RMS discrimina sano vs enfermo, pero no gradúa la severidad dentro de los scores simulados en Golpeteo de dedos, sugiriendo que puede ser más útil como indicador binario de presencia de síntomas. 

En conjunto, estos hallazgos proveen la evidencia necesaria para justificar el avance hacia la correspondencia con la escala MDS-UPDRS y posteriormente hacia una validación clínica formal en TRL 4. 

## **6. CONCLUSIONES Y FUTURO TRABAJO** 

El desarrollo del presente proyecto permitió cumplir los objetivos planteados, logrando la integración funcional de nuevas pruebas motoras basadas en sensores inerciales dentro del ecosistema tecnológico IMUs–Vimov para apoyar la evaluación objetiva de bradicinesia en correspondencia con la escala MDS-UPDRS. 

Respecto al objetivo 2, que planteaba establecer una correspondencia entre las métricas objetivas y la escala MDS-UPDRS, es importante precisar el alcance real de lo logrado. La correspondencia se estableció mediante la comparación de métricas cinemáticas contra scores simulados por los integrantes del proyecto siguiendo los criterios conductuales de la escala, y no contra puntuaciones asignadas por neurólogos clínicos como se enunciaba originalmente en el objetivo. Esta diferencia constituye una limitación explícita del alcance del trabajo: si bien los resultados estadísticos demuestran discriminabilidad entre niveles de severidad simulados, la validez clínica de dicha correspondencia no fue verificada en esta fase. Esta validación queda pendiente para TRL 4, donde la comparación con evaluaciones clínicas reales permitirá determinar el grado de concordancia entre el sistema y el estándar clínico. 

En la prueba de pronación/supinación, los resultados evidenciaron un desempeño robusto tanto a nivel biomecánico como analítico. La ubicación del sensor en la muñeca permitió capturar de forma directa la dinámica rotacional del antebrazo, obteniéndose señales consistentes, métricas cinemáticas discriminativas y modelos de clasificación con adecuada capacidad de generalización. Los tamaños de efecto, las correlaciones monotónicas con severidad y el desempeño del modelo LDA confirman que esta prueba constituye una implementación técnicamente sólida y con alto potencial para avanzar hacia procesos de validación clínica formal en etapas posteriores. 

Para la prueba de golpeteo de dedos, aunque se logró la integración completa del flujo de captura, procesamiento y visualización dentro de Vimov, los resultados experimentales evidenciaron limitaciones asociadas principalmente a la posición del sensor. Si bien las métricas temporales demostraron capacidad discriminativa para identificar cambios en el ritmo motor, las dimensiones relacionadas con amplitud y dinámica no presentaron comportamiento biomecánicamente consistente entre niveles de severidad. Esto indica que, bajo la configuración actual, la prueba ofrece evidencia parcial de utilidad, pero requiere ajustes metodológicos antes de considerarse clínicamente robusta. 

Uno de los principales aportes del proyecto consiste precisamente en haber identificado experimentalmente esta limitación y establecer evidencia objetiva sobre su causa técnica. El análisis desarrollado sugiere que la ubicación dorsal de la IMU resulta adecuada para 

movimientos rotacionales amplios, pero subóptima para capturar desplazamientos finos y distales propios del golpeteo de dedos. 

Como trabajo futuro, se plantea la transición hacia sistemas de evaluación motora multimodal que superen las limitaciones de la instrumentación inercial en movimientos finos. En esta dirección, el proyecto entrega un avance técnico y metodológico fundamental mediante el desarrollo de un pipeline funcional basado en visión por computador, detallado en el Anexo N. Este aporte no solo establece una base conceptual, sino que consolida un marco de procesamiento validado que utiliza algoritmos de seguimiento (MediaPipe), extracción automatizada de características cinemáticas y modelos de aprendizaje supervisado (XGBoost/LDA). Al haber resuelto desafíos críticos como la corrección de la data leakage y la sincronización de métricas en Hz reales, este trabajo se constituye como el punto de partida técnico y la hoja de ruta metodológica para la prueba de golpeteo de dedos. 

Finalmente, los resultados alcanzados permiten concluir que el sistema desarrollado demuestra viabilidad tecnológica en un contexto TRL 3, validando el uso de sensores inerciales como herramienta objetiva de apoyo clínico para evaluación motora, particularmente en la prueba de pronación/supinación, y estableciendo bases técnicas sólidas para futuras fases de maduración y validación clínica. 

## **ANEXOS** 

## **ANEXO A - Árbol del problema** 

Para adecuar y comprender en profundidad el objeto de estudio de este proyecto, se ha utilizado la metodología del árbol de problemas. Esta herramienta de carácter visual permite identificar una situación compleja en sus componentes fundamentales, lo que permite que, a través de ello, llegue a ser un análisis claro y sistemático de los factores causantes y de los factores efecto. 

## **ANEXO B - Registro de historias de usuario en Jira** 

En este anexo se presenta el registro de 13 historias de usuario gestionadas en la herramienta Jira durante el desarrollo del proyecto. Cada historia de usuario incluye información relacionada con su descripción funcional, criterios de aceptación, nivel de prioridad y estado dentro del flujo de trabajo, lo que facilitó la trazabilidad de las actividades de desarrollo y la validación incremental de las funcionalidades implementadas en la aplicación móvil IMUs y la plataforma Vimov. 

**ÉPICA 1: Protocolos de captura** 

|**Historia de usuario**|**Prioridad**|**Estimación**|**Detalle**|**Criterios de aceptación**|
|---|---|---|---|---|
|Guía estandarizada para<br>pronación/supinación|Muy Alta|5 puntos|Como Personal Médico, quiero un<br>protocolo de captura estandarizado<br>para<br>la<br>prueba<br>de<br>pronación/supinación, para que los<br>resultados<br>sean<br>consistentes<br>y<br>comparables entrepacientes.|- El protocolo debe describir la colocación de<br>sensores y la duración de la prueba (mínimo<br>10 segundos).<br>- El sistema debe permitir registrar varias<br>repeticiones por paciente.|
|Guía estandarizada para<br>golpeteo de dedos|Muy Alta|5 puntos|Como Personal Médico, quiero un<br>protocolo de captura estandarizado<br>para la prueba de golpeteo de dedos,<br>para<br>que<br>los<br>resultados<br>sean<br>consistentes<br>y<br>comparables<br>entre<br>pacientes.|- El protocolo debe describir la colocación de<br>sensores y la duración de la prueba (mínimo<br>10 segundos).<br>- El sistema debe permitir registrar varias<br>repeticiones por paciente.|
|Implementar captura de<br>datos<br>de<br>pronación/supinación en<br>la App IMUs|Alta|5 puntos|Como personal médico, quiero que la<br>aplicación IMUs cuente con una<br>funcionalidad dedicada para ejecutar la<br>prueba de pronación/supinación, que<br>incluya un botón específico y la<br>generación automática de una plantilla<br>JSON con elprotocolo de captura, de|- La app debe mostrar un botón visible y<br>diferenciado para la prueba.<br>- Generación automática de archivo JSON<br>con la estructura del protocolo.<br>- Incluir metadatos: ID de paciente, fecha,<br>número de repeticiones y tipo de prueba.|



||||modo que se facilite la selección y<br>registro estructurado.||
|---|---|---|---|---|
|Implementar captura de<br>datos de golpeteo de<br>dedos en la App IMUs|Alta|5 puntos|Como personal médico, quiero que la<br>aplicación IMUs cuente con una<br>funcionalidad dedicada para ejecutar la<br>prueba de golpeteo de dedos, con un<br>botón específico y generación de<br>plantilla JSON, para facilitar el análisis<br>estructurado de las repeticiones.|- Botón visible y diferenciado para Golpeteo<br>de dedos.<br>- El sistema genera un JSON con metadatos<br>y señales capturadas.<br>- La interfaz debe mantener coherencia<br>estética con el resto de la aplicación.|



## **ÉPICA 2: Resultados clínicos accesibles** 

|**Historia de usuario**|**Prioridad**|**Estimación**|**Detalle**|**Criterios de aceptación**|
|---|---|---|---|---|
|Clasificación<br>automática<br>de severidad motora|Muy Alta|13 puntos|Como Personal Médico, quiero que el<br>sistema estime automáticamente el<br>nivel de severidad (0–4) según la escala<br>MDS-UPDRS, para complementar la<br>evaluación clínica con un análisis<br>objetivo<br>basado<br>en<br>inteligencia<br>artificial.|-<br>Entrenamiento<br>de<br>un<br>modelo<br>de<br>clasificación<br>con<br>métricas<br>objetivas<br>(Accuracy, F1).<br>- Validación satisfactoria con datos no vistos.<br>- Exportación del modelo para integración<br>con la plataforma Vimov.|
|Visualización<br>de<br>resultados de Golpeteo de<br>dedos en Vimov|Alta|8 puntos|Como<br>Personal<br>Médico,<br>quiero<br>visualizar en Vimov el resultado de la<br>prueba de Golpeteo de dedos con un<br>puntaje de 0 a 4, para apoyar mi<br>diagnóstico clínico directamente desde<br>laplataforma.|- El resultado debe mostrarse en escala<br>según MDS-UPDRS.- Identificación clara de<br>la prueba en la interfaz.<br>- El puntaje debe aparecer inmediatamente<br>tras el procesamiento.|
|Visualización<br>de<br>resultados<br>de|Media|8 puntos|Como<br>Personal<br>Médico,<br>quiero<br>visualizar en Vimov el resultado de la<br>prueba de Pronación/supinación con|- Escala de visualización 0–4.<br>- Identificación clara del tipo de prueba.<br>- Resultado disponible tras la carga de datos.|



|Pronación/supinación en<br>Vimov|||un puntaje de 0 a 4, para facilitar el<br>seguimiento delpaciente.||
|---|---|---|---|---|
|Gráficas de apoyo a la<br>interpretación|Media|3 puntos|Como Personal Médico, quiero que el<br>sistema<br>muestre<br>gráficas<br>del<br>desempeño<br>motor<br>(frecuencia,<br>amplitud,<br>regularidad),<br>para<br>complementar el puntaje numérico con<br>información visual detallada.|- Visualización de gráficas asociadas a los<br>puntajes.<br>- Diferenciación entre pruebas.<br>- Posibilidad de adjuntar gráficas a la historia<br>clínica del paciente.|
|**ÉPICA 3: Integración y**|**Validación**|**del Sistema**|||
|**Historia de usuario**|**Prioridad**|**Estimación**|**Detalle**|**Criterios de aceptación**|
|Integración del modelo de<br>clasificación en Vimov|Alta|8 puntos|Como Personal Médico, quiero que el<br>modelo de clasificación esté integrado<br>en Vimov, para que la generación del<br>nivel de severidad sea automática tras<br>realizar la prueba.|-<br>Procesamiento<br>automático<br>de<br>características dentro de la plataforma.<br>- Visualización conjunta de puntaje y<br>gráficas.<br>- Tiempo de respuesta imperceptible para el<br>usuario final.|
|Validación clínica y técnica<br>del modelo|Alta|5 puntos|Como Equipo Clínico e Investigador,<br>quiero validar el desempeño del<br>modelo comparando sus predicciones<br>con evaluaciones médicas reales, para<br>asegurar su confiabilidad técnica.|-<br>Comparación<br>de<br>predicciones<br>vs.<br>evaluación clínica experta.<br>- Generación de matriz de confusión.<br>- Informe de validación con métricas<br>técnicas.|
|Integración de pruebas en<br>Vimov (Backend)|Media|5 puntos|Como Equipo de desarrollo, quiero que<br>Vimov procese diferentes archivos<br>JSON provenientes de las IMUs, para|- Identificación automática del tipo de<br>prueba.<br>- Validación de campos obligatorios.<br>- Manejo de errores ante formatos inválidos.|



||||cargar y analizar los datos capturados<br>sin intervenciones manuales.||
|---|---|---|---|---|
|Validación<br>clínica<br>de<br>Golpeteo<br>de<br>dedos<br>y<br>Pronación/supinación|Media|3 puntos|Como Personal Médico, quiero validar<br>el sistema con pacientes reales para<br>comprobar<br>que<br>los<br>resultados<br>coinciden con la escala MDS-UPDRS en<br>un entorno de uso real.|- Inclusión de al menos 10 pacientes en<br>prueba piloto.<br>- Diferencia sistema vs evaluación clínica ≤<br>±1 punto.<br>- Registro de resultados en informe validado.|
|Manual de uso clínico|Baja|3 puntos|Como Personal Médico, quiero un<br>manual de uso sencillo que explique<br>cómo aplicar las pruebas de Golpeteo<br>de dedos y Pronación/supinación sin<br>necesidad de asistencia técnica.|- Explicación gráfica de colocación de<br>sensores.<br>- Ejemplos de interpretación de resultados.<br>- Lenguaje accesible para personal de salud<br>no técnico.|



## **ANEXO C - Repositorios y recursos técnicos del proyecto** 

Los enlaces de acceso a las principales herramientas, repositorios y artefactos técnicos utilizados durante el desarrollo del proyecto. Estos recursos documentan el proceso de gestión, implementación, experimentación y validación desarrollado sobre el ecosistema IMUs–Vimov, y constituyen material de referencia para consulta, trazabilidad y futuras extensiones del sistema. 

Varios de los repositorios y plataformas mencionados corresponden a desarrollos institucionales pertenecientes a grupos de investigación y organizaciones colaboradoras. Por esta razón, su acceso es de carácter privado y se encuentra restringido a los miembros autorizados de cada equipo. Cualquier solicitud de acceso deberá gestionarse directamente con los responsables de los respectivos repositorios, en particular con el grupo de investigación i2t para los componentes asociados a la aplicación IMUs y con los administradores de la plataforma Vimov para los componentes correspondientes. 

|**Recurso**|**Descripción**|
|---|---|
|**Jira – Gestión del proyecto**|Tablero de planeación y seguimiento de sprints, historias de usuario, tareas<br>técnicas y avance del desarrollo. (Acceso restringido)|
|**Confluence – Documentación**<br>**técnica**|Espacio colaborativo utilizado para documentación funcional, criterios<br>técnicos, acuerdos de arquitectura y trazabilidad metodológica. (Acceso<br>restringido)|
|**Repositorio GitHub– IMUs**|Código fuente correspondiente a la aplicación móvil para captura de<br>señales mediante sensores inerciales.|
|**Repositorio GitHub– Vimov**|Código fuente de la plataforma web encargada del procesamiento, análisis<br>yvisualización clínica de resultados.|
|**Repositorio analítico**|Implementación del pipeline de procesamiento de señales, extracción de<br>métricas biomecánicas y modelos de clasificación automática.|
|**Repositorio de visión por**<br>**computador**|Desarrollo preliminar orientado a la exploración de captura basada en<br>video como línea futura de trabajo.|
|**Aplicación de guía sonora**|Implementación utilizada para la generación controlada de estímulos<br>auditivos durante la simulación experimental de severidad motora.|



## **ANEXO D - Análisis de participación** 

Con el fin de dejar definidos los roles y responsabilidades en el proyecto, se adoptó la matriz RASCI (Responsible, Accountable, Support, Consulted, Informed). Esta metodología ayuda a precisar quién asume la ejecución de las actividades, quién responde por los resultados, quién brinda respaldo, a quién se debe consultar y quién debe mantenerse al tanto de los avances. 

|**Actor / Grupo**|**R**|**A**|**S**|**C**|**I**|
|---|---|---|---|---|---|
|**Pacientes con Parkinson**||||✓|✓|
|**Personal Médico**||||✓|✓|
|**Grupo i2t (Universidad Icesi)**||✓|✓|✓|✓|
|**Estudiantes desarrolladores**|✓|||||
|**Tutores / directores**||✓||✓|✓|
|**Universidad Icesi**|||✓||✓|
|**FVL**|||✓|✓|✓|



## **ANEXO E - Cronograma Tipo Gantt** 

En este anexo se presenta la versión inicial del cronograma del proyecto, elaborada al inicio del proceso de planificación. Este cronograma fue estructurado para un periodo estimado de 26 semanas, considerando las fases y actividades previstas en la formulación inicial del proyecto. 

## **ANEXO F - Tablas de baseline estadística** 

En este anexo se presentan las tablas de baseline estadística generadas para las pruebas de pronación/supinación (MDS-UPDRS 3.6) y golpeteo de dedos (MDS-UPDRS 3.4). Estas tablas contienen los estadísticos descriptivos obtenidos a partir de sujetos no diagnosticados, incluyendo media, desviación estándar y percentiles P5–P95 para cada una de las métricas cinemáticas extraídas mediante el pipeline de procesamiento de señales IMU. 

## **Baseline Pronación-Supinación** 

|**Métrica**|**Media**|**Desv. estándar**|**P5**|**P95**|
|---|---|---|---|---|
|n_ciclos|10.000|0.000|10.000|10.000|
|duracion|11.658|1.990|8.588|14.292|
|cadencia|1.459|0.392|1.024|1.941|
|amplitud_media|1661.452|645.075|1203.934|2223.346|
|amplitud_cv|0.183|0.131|0.067|0.496|
|amplitud_angular_media|18.547|19.467|7.727|36.391|
|rango_angular_total|165.637|191.907|84.059|354.931|
|velocidad_pico_media|830.726|322.538|601.967|1111.673|
|velocidad_pico_max|1380.089|954.497|827.380|2988.463|
|frecuencia|1.680|1.246|1.020|3.098|
|regularidad|81.734|13.064|50.355|93.319|
|compensacion_lateral|30.439|24.003|9.959|76.214|
|jerk_rms_angular|7461.718|3262.592|4537.703|11494.907|
|jerk_rms|9.396|12.780|3.303|38.342|
|energia_relativa_x|0.976|0.021|0.943|0.996|
|n_hesitaciones|0.000|0.500|0.000|1.000|
|decremento_pct|5.000|8.000|-5.000|20.000|



## **Baseline Golpeteo de dedos** 

|**Métrica**|**Media**|**Desv. estándar**|**P5**|**P95**|
|---|---|---|---|---|
|n_taps|10.000|0.000|10.000|10.000|
|duracion|8.268|2.248|5.644|11.553|
|cadencia|1.694|0.484|1.003|2.428|
|iti_media|0.650|0.233|0.412|0.997|
|iti_std|0.326|0.140|0.112|0.561|
|iti_cv|0.523|0.201|0.182|0.837|
|amplitud_media|0.991|0.583|0.344|2.104|
|amplitud_cv|0.386|0.131|0.205|0.644|
|amplitud_angular_media|1.982|1.166|0.687|4.209|
|amplitud_angular_std|0.715|0.409|0.228|1.606|
|velocidad_pico_media|0.991|0.583|0.344|2.104|
|frecuencia|1.778|0.851|0.603|3.122|
|regularidad|61.367|13.143|35.617|79.523|
|regularidad_ritmica|47.925|19.641|16.264|81.846|
|decremento_pct|-6.218|45.561|-92.032|50.419|
|decremento_pendiente|-0.017|0.103|-0.195|0.111|
|n_hesitaciones|0.644|0.830|0.000|2.000|
|compensacion_lateral|4.766|1.987|2.306|8.340|
|jerk_rms_angular|10.285|5.019|4.551|19.514|
|jerk_rms|1.634|1.153|0.235|3.543|
|rms_acc_lateral|0.401|0.201|0.122|0.759|
|energia_relativa_dom|0.004|0.002|0.001|0.007|



## **ANEXO G – Diagrama C4 nivel 1** 

En este anexo se presenta el diagrama C4 Nivel 1 correspondiente al contexto general de la plataforma Vimov. Se ilustran los actores externos, sistemas integrados y relaciones principales de interacción, permitiendo visualizar a Vimov como núcleo del ecosistema de análisis clínico, así como su integración con servicios externos para autenticación, gestión de usuarios y procesamiento de información médica. 

## **ANEXO H – Modelo Entidad-Relación (MER) de vimov** 

En este anexo se presenta el Modelo Entidad-Relación de la plataforma Vimov, donde se describe la estructura lógica de la base de datos utilizada para la gestión de información clínica, usuarios, pruebas motoras y almacenamiento asociado al procesamiento de señales. Este modelo permitió analizar las relaciones entre entidades y comprender la organización de los datos dentro de la infraestructura persistente del sistema. 

## **ANEXO I – Diagrama C4 nivel 3** 

En este anexo se presenta el diagrama C4 Nivel 3 que detalla la arquitectura interna del servidor web de Vimov. Se describen los principales componentes de software, incluyendo los módulos encargados del procesamiento de señales inerciales, gestión de pruebas clínicas, comunicación con servicios de persistencia y visualización de resultados, con énfasis en el módulo IMUs desarrollado para el análisis de pruebas motoras mediante sensores inerciales. 

## **ANEXO J – Diagrama de Clases de la Aplicación IMUs** 

En este anexo se presenta el diagrama de clases de la aplicación móvil IMUs, donde se describe la organización estructural de sus principales componentes de software, incluyendo las capas de interfaz, lógica de negocio, comunicación BLE, persistencia y gestión de datos. Este artefacto permitió identificar las dependencias internas y los puntos de extensión necesarios para incorporar las nuevas pruebas motoras. 

## **ANEXO K - Diagrama de Flujo de Datos de IMUs** 

En este anexo se presenta el diagrama de flujo de datos de la aplicación IMUs, ilustrando el recorrido de la información desde la captura de señales por los sensores inerciales hasta su procesamiento, almacenamiento local y posterior envío hacia la plataforma Vimov. Este análisis permitió comprender el comportamiento interno del sistema y definir los puntos de integración requeridos. 

## **ANEXO L - Prototipo de interfaz** 

En este anexo se presentan los prototipos de interfaz diseñados en Figma correspondientes a las pruebas de pronación/supinación y golpeteo de dedos. Estos prototipos ilustran la estructura visual, la interacción del usuario y el flujo de uso propuesto para la ejecución de dichas evaluaciones dentro de la plataforma Vimov. Su objetivo es facilitar la validación del diseño de las interfaces, asegurar la claridad en la captura de los movimientos requeridos por cada prueba y servir como referencia para el proceso de implementación y desarrollo del sistema. 

## **ANEXO M – Aplicación experimental de guía sonora** 

En este anexo se presenta la aplicación experimental de guía sonora desarrollada para estandarizar la simulación de los Scores 1–4 de la escala MDS-UPDRS durante las pruebas internas. La herramienta permitió controlar la cadencia de ejecución y generar interrupciones aleatorias por nivel de severidad, garantizando consistencia experimental durante la captura de datos. 

## **ANEXO N – Base técnica para la implementación futura de visión por computador** 

Con el propósito de establecer una alternativa metodológica frente a las limitaciones identificadas en la captura inercial de movimientos distales durante la prueba de golpeteo de dedos, se desarrolló una base técnica experimental orientada al análisis mediante visión por computador. 

Este desarrollo constituye un insumo técnico para futuras extensiones del ecosistema IMUs–Vimov, proporcionando una implementación reproducible para la extracción, procesamiento y análisis automático de métricas cinemáticas a partir de video. 

## **N.1 Recursos utilizados** 

|**utilizados**||
|---|---|
|**Recurso**|**Descripción**|
|**Framework base**|MediaPipe Hand Landmarker|
|**Dataset**|FIS Dataset (Zenodo)|
|**Número de registros**|234 grabaciones|
|**Tarea evaluada**|Finger Tapping|
|**Lenguaje de implementación**|Python|
|**Entorno experimental**|Conda (environment_cross.yml)|
|**Validación**|Leave-One-Out|



## **N.2 Componentes implementados** 

|**Componente**|**Función**|
|---|---|
|Extracción cinemática|Detección de landmarks y generación de series<br>temporales|
|Procesamiento de<br>señales|Normalización espacial y ajuste temporal según<br>FPS reales|
|Extracción de<br>características|Cálculo de métricas cinemáticas comparables<br>con IMU|
|Modelado analítico|Implementación de modelos LDA y XGBoost|
|Validación<br>experimental|Evaluación Leave-One-Out sin fuga de<br>información|



|Infraestructura<br>reproducible|Checkpoints, notebooks analíticos y diagnóstico<br>de sobreajuste|
|---|---|



## **N.3 Mejoras metodológicas incorporadas** 

Respecto a la implementación base utilizada como referencia, se incorporaron los siguientes ajustes: 

- Corrección del proceso de selección de características para evitar _data leakage_ . 

- Incorporación de métricas equivalentes a las empleadas en análisis inercial (ITI, ITI CV, Jerk RMS y frecuencia dominante). 

- Corrección del cálculo espectral utilizando la frecuencia real de adquisición. 

- Registro estructurado de métricas de entrenamiento y prueba para análisis de generalización. 

## **N.4 Arquitectura general del pipeline** 

Aquí se presenta la arquitectura general del pipeline desarrollado para el procesamiento automático de video _(imagen generada con IA – Gemini)_ . 

## **N.5 Alcance del desarrollo** 

El avance entregado corresponde a una prueba de concepto funcional a nivel experimental, que deja implementada la estructura necesaria para una futura integración multimodal dentro del ecosistema Vimov. 

Para una descripción detallada de la implementación, estructura del código, notebooks experimentales y lineamientos de ejecución, consultar el repositorio técnico referenciado en el Anexo C. 

## **Referencias bibliográficas** 

Bourque, P., & Fairley, R. E. (2014). Guide to the Software Engineering - Body of Knowledge (SWEBOK 2014). In _IEEE Computer Society_ . 

- Bremm, R. P., Pavelka, L., Garcia, M. M., Mombaerts, L., Krüger, R., & Hertel, F. (2024). SensorBased Quantification of MDS-UPDRS III Subitems in Parkinson’s Disease Using Machine Learning. _Sensors_ , _24_ (7). https://doi.org/10.3390/s24072195 

- Choi, J. H., Ma, H. Il, Kim, Y. J., & Lee, U. (2016). Development of an assessment method of forearm pronation/supination motor function based on mobile phone accelerometer data for an early diagnosis of Parkinson’s disease. _International Journal of Bio-Science and Bio-Technology_ , _8_ (2), 1–10. https://doi.org/10.14257/ijbsbt.2016.8.2.01 

- Dai, H., Lin, H., & Lueth, T. C. (2015). Quantitative assessment of parkinsonian bradykinesia based on an inertial measurement unit. _BioMedical Engineering Online_ , _14_ (1). https://doi.org/10.1186/s12938-015-0067-8 

- di Biase, L., Summa, S., Tosi, J., Taffoni, F., Marano, M., Rizzo, A. C., Vecchio, F., Formica, D., Di Lazzaro, V., Di Pino, G., & Tombini, M. (2018). Quantitative analysis of bradykinesia and rigidity in Parkinson’s disease. _Frontiers in Neurology_ , _9_ (MAR). https://doi.org/10.3389/fneur.2018.00121 

- Dorsey, E. R., Sherer, T., Okun, M. S., & Bloemd, B. R. (2018). The emerging evidence of the Parkinson pandemic. In _Journal of Parkinson’s Disease_ (Vol. 8, Number s1). https://doi.org/10.3233/JPD-181474 

- Goetz, C. G., Tilley, B. C., Shaftman, S. R., Stebbins, G. T., Fahn, S., Martinez-Martin, P., Poewe, W., Sampaio, C., Stern, M. B., Dodel, R., Dubois, B., Holloway, R., Jankovic, J., Kulisevsky, J., Lang, A. E., Lees, A., Leurgans, S., LeWitt, P. A., Nyenhuis, D., … Zweig, R. M. (2008). Movement Disorder Society-Sponsored Revision of the Unified Parkinson’s Disease Rating Scale (MDS-UPDRS): Scale presentation and clinimetric testing results. _Movement Disorders_ , _23_ (15). https://doi.org/10.1002/mds.22340 

- Höglund, G., Grip, H., & Öhberg, F. (2021). The importance of inertial measurement unit placement in assessing upper limb motion. _Medical Engineering and Physics_ , _92_ . https://doi.org/10.1016/j.medengphy.2021.03.010 

- Houdijk, H., Brown, S. E., & Van Dieën, J. H. (2015). Relation between postural sway magnitude and metabolic energy cost during upright standing on a compliant surface. _J Appl Physiol_ , _119_ , 696–703. https://doi.org/10.1152/japplphysiol.00907.2014.-Postural 

- IEEE Computer Society, Wolff, S., Larsen, P. G., Fitzgerald, J. S., & Wolff, S. (2010). IEEE Std 829-2008, IEEE Standard for Software and System Test Documentation. _Computing Science. Technical Report Series. CS-TR-1218_ , _2008_ (August). 

- International, C., & Commission, E. (2006). IEC 62304:2006 : Medical device software - Software life cycle processes. In _Order A Journal On The Theory Of Ordered Sets And Its Applications_ (Vol. 2006). 

- Kandel, E. R., Schwartz, J. H., Jessell, T. M., Siegelbaum, S. A., Hudspeth, A. J., & Mack, S. (2013). _Principles of neural science / edited by Eric R. Kandel, James H. Schwartz, Thomas M. Jessell, Steven A. Siegelbaum, A. J. Hudspeth ; art editor, Sarah Mack._ https://search.ebscohost.com/login.aspx?direct=true&db=cat10289a&AN=icesi.3051 42&site=eds-live 

- Kremer, N. I., Smid, A., Lange, S. F., Mateus Marçal, I., Tamasi, K., van Dijk, J. M. C., van Laar, T., & Drost, G. (2023). Supine MDS-UPDRS-III Assessment: An Explorative Study. _Journal of Clinical Medicine_ , _12_ (9). https://doi.org/10.3390/jcm12093108 

- Ministerio de Salud de Colombia. (1993). Resolución 8430 de 1993: Por la cual se establecen las normas científicas, técnicas y administrativas para la investigación en salud. 

- Parkinson’s Foundation. (2024). _Statistics_ . Https://Www.Parkinson.Org/UnderstandingParkinsons/Statistics. 

- Sánchez-Fernández, L. P., Garza-Rodríguez, A., Sánchez-Pérez, L. A., & Martínez-Hernández, J. M. (2023). A Computer Method for Pronation-Supination Assessment in Parkinson’s Disease Based on Latent Space Representations of Biomechanical Indicators. _Bioengineering_ , _10_ (5). https://doi.org/10.3390/bioengineering10050588 

- Stins, J. F., Schneider, I. K., Koole, S. L., & Beek, P. J. (2015). The influence of motor imagery on postural sway: Differential effects of type of body movement and person perspective. In _Advances in Cognitive Psychology_ (Vol. 11, Number 3, pp. 77–83). University of Finance and Management in Warsaw. https://doi.org/10.5709/acp-0173-x 

- Su, D., Cui, Y., He, C., Yin, P., Bai, R., Zhu, J., Lam, J. S. T., Zhang, J., Yan, R., Zheng, X., Wu, J., Zhao, D., Wang, A., Zhou, M., & Feng, T. (2025). Projections for prevalence of Parkinson’s disease and its driving factors in 195 countries and territories to 2050: modelling study of Global Burden of Disease Study 2021. _BMJ_ . https://doi.org/10.1136/bmj-2024080952 

- Tomaszewski, D., Rapiński, J., & Pelc-Mieczkowska, R. (2017). Concept of AHRS Algorithm Designed for Platform Independent Imu Attitude Alignment. _Reports on Geodesy and Geoinformatics_ , _104_ (1). https://doi.org/10.1515/rgg-2017-0013 

- Yu, T., Park, K. W., McKeown, M. J., & Wang, Z. J. (2023). Clinically Informed Automated Assessment of Finger Tapping Videos in Parkinson’s Disease. _Sensors_ , _23_ (22). https://doi.org/10.3390/s23229149 

