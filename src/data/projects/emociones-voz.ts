import type { Project } from "./types";

const dir = "/proyectos/emociones-voz";

export const emocionesVoz: Project = {
  slug: "emociones-voz",
  title: {
    es: "VibeClassifier: predicción de emociones a partir de la voz",
    en: "VibeClassifier: speech emotion recognition",
  },
  category: { es: "Procesamiento de señales · Machine Learning", en: "Signal processing · Machine Learning" },
  summary: {
    es: "Clasificación de 8 emociones en grabaciones de voz del corpus RAVDESS mediante descriptores temporales y espectrales y modelos de ensamble.",
    en: "Classification of 8 emotions in RAVDESS voice recordings using temporal and spectral descriptors and ensemble models.",
  },
  tags: ["Python", "Procesamiento de señales", "scikit-learn", "XGBoost", "Random Forest", "Gradio", "RAVDESS"],
  cover: `${dir}/interfaz-grafica.png`,
  facts: [
    { label: { es: "Base de datos", en: "Dataset" }, value: "RAVDESS" },
    { label: { es: "Clases", en: "Classes" }, value: { es: "8 emociones", en: "8 emotions" } },
    { label: { es: "Descriptores", en: "Features" }, value: { es: "40 por ventana", en: "40 per window" } },
    { label: { es: "Modelos", en: "Models" }, value: "RF · DT · SVM · XGBoost · AdaBoost" },
    { label: { es: "Accuracy (RF + SelectKBest)", en: "Accuracy (RF + SelectKBest)" }, value: "44.61 %" },
    { label: { es: "AUC por clase", en: "Per-class AUC" }, value: "0.75 – 0.93" },
  ],
  sections: [
    {
      id: "objetivo",
      title: { es: "Objetivo", en: "Objective" },
      paragraphs: {
        es: [
          "Desarrollar un modelo capaz de predecir emociones humanas a partir de grabaciones de audio, combinando técnicas de procesamiento de señales y aprendizaje automático para identificar patrones emocionales en la voz.",
        ],
        en: [
          "Build a model able to predict human emotions from audio recordings, combining signal processing and machine learning techniques to identify emotional patterns in the voice.",
        ],
      },
      figures: [
        {
          src: `${dir}/logo-vibeclassifier.png`,
          alt: { es: "Logo de VibeClassifier", en: "VibeClassifier logo" },
          caption: {
            es: "Identidad del proyecto: «Vibe» alude a las emociones y «Classifier» a su clasificación con aprendizaje automático. Las letras A y W corresponden a las iniciales de los dos integrantes del equipo.",
            en: "Project identity: “Vibe” refers to emotions and “Classifier” to their machine-learning classification. The letters A and W are the initials of the two team members.",
          },
        },
      ],
    },
    {
      id: "base-de-datos",
      title: { es: "Base de datos", en: "Dataset" },
      paragraphs: {
        es: [
          "RAVDESS (Ryerson Audio-Visual Database of Emotional Speech and Song) contiene 7.356 grabaciones de actores que interpretan emociones en habla y canto, con 8 emociones en distintos niveles de intensidad. Es un corpus de referencia para el reconocimiento emocional en voz.",
          "El corpus se alojó en Google Drive para centralizar el acceso remoto y la gestión de los archivos durante todo el flujo de trabajo.",
        ],
        en: [
          "RAVDESS (Ryerson Audio-Visual Database of Emotional Speech and Song) contains 7,356 recordings of actors portraying emotions in speech and song, covering 8 emotions at different intensity levels. It is a reference corpus for speech emotion recognition.",
          "The corpus was hosted on Google Drive to centralize remote access and file management throughout the workflow.",
        ],
      },
    },
    {
      id: "analisis-senales",
      title: { es: "Parte 1 · Análisis de la señal de audio", en: "Part 1 · Audio signal analysis" },
      paragraphs: {
        es: [
          "Se reprodujeron los audios y se extrajeron sus metadatos (actor, emoción, intensidad y modalidad codificados en el nombre del archivo). Sobre cada señal se analizaron la forma de onda, los cruces por cero, la convolución y la primera y segunda derivada; finalmente, las grabaciones se concatenaron para construir una señal continua por emoción.",
        ],
        en: [
          "Recordings were played back and their metadata extracted (actor, emotion, intensity and modality encoded in the file name). Each signal was analyzed through its waveform, zero crossings, convolution and first and second derivatives; the recordings were then concatenated into a continuous signal per emotion.",
        ],
      },
      figures: [
        {
          src: `${dir}/cruces-por-cero.png`,
          alt: { es: "Forma de onda con cruces por cero", en: "Waveform with zero crossings" },
          caption: {
            es: "Forma de onda y cruces por cero del archivo 03-01-03-02-01-01-19.wav (3.897 cruces).",
            en: "Waveform and zero crossings of file 03-01-03-02-01-01-19.wav (3,897 crossings).",
          },
        },
      ],
    },
    {
      id: "descriptores",
      title: { es: "Parte 2 · Base de datos de descriptores", en: "Part 2 · Feature dataset" },
      paragraphs: {
        es: [
          "Los audios concatenados se segmentaron en ventanas de distinto número de muestras. Para cada ventana se calcularon los siguientes descriptores temporales, espectrales y perceptuales:",
        ],
        en: [
          "The concatenated audio was segmented into windows of different sample sizes. For each window the following temporal, spectral and perceptual descriptors were computed:",
        ],
      },
      terms: [
        { term: "Zero-crossings", text: { es: "Número de veces que la señal cruza el cero.", en: "Number of times the signal crosses zero." } },
        { term: "Energy", text: { es: "Energía total de la señal en la ventana.", en: "Total signal energy within the window." } },
        { term: "Intensity", text: { es: "Fuerza o volumen percibido de la señal.", en: "Perceived strength or loudness of the signal." } },
        { term: "RMS", text: { es: "Valor cuadrático medio.", en: "Root mean square value." } },
        { term: "Standard Deviation", text: { es: "Variabilidad de las amplitudes.", en: "Variability of the amplitudes." } },
        { term: "Sum of Absolute Magnitudes", text: { es: "Suma de los valores absolutos de la señal.", en: "Sum of the absolute signal values." } },
        { term: "Autocorrelation", text: { es: "Similitud de la señal consigo misma desplazada en el tiempo.", en: "Similarity of the signal with a time-shifted copy of itself." } },
        { term: "Peak-to-Peak", text: { es: "Diferencia entre el valor máximo y el mínimo.", en: "Difference between maximum and minimum values." } },
        { term: "Silence / Attack / Release Duration", text: { es: "Tiempo en silencio, tiempo hasta el máximo y tiempo de decaimiento.", en: "Silent time, time to peak and decay time." } },
        { term: "Fundamental Frequency", text: { es: "Frecuencia base (F0) de la señal.", en: "Base frequency (F0) of the signal." } },
        { term: "Crest Factor", text: { es: "Relación entre el valor pico y el RMS.", en: "Ratio between peak value and RMS." } },
        { term: "Skewness / Kurtosis", text: { es: "Asimetría y concentración de la distribución de amplitudes.", en: "Asymmetry and peakedness of the amplitude distribution." } },
        { term: "Spectral Entropy / Flatness", text: { es: "Desorden del espectro y similitud con ruido blanco.", en: "Spectral disorder and similarity to white noise." } },
        { term: "Spectral Rolloff / Centroid / Bandwidth", text: { es: "Frecuencia de corte, «centro de gravedad» y ancho del espectro.", en: "Cut-off frequency, “center of mass” and width of the spectrum." } },
        { term: "Pitch Salience / Perceptual Loudness", text: { es: "Intensidad tonal y volumen percibidos.", en: "Perceived tonal strength and loudness." } },
        { term: "Histogram Bin 1–10", text: { es: "Distribución de amplitudes en 10 rangos.", en: "Amplitude distribution across 10 ranges." } },
        { term: "Spectral Contrast Band 1–7", text: { es: "Diferencia de amplitud entre picos y valles en 7 bandas espectrales.", en: "Peak-to-valley amplitude difference across 7 spectral bands." } },
      ],
    },
    {
      id: "analisis-exploratorio",
      title: { es: "Parte 3 · Análisis exploratorio", en: "Part 3 · Exploratory analysis" },
      paragraphs: {
        es: [
          "Con el dataframe de descriptores etiquetado por emoción se estudiaron las relaciones entre variables (matriz de correlación) y la distribución de cada descriptor por clase mediante diagramas de violín, diagramas de cajas e histogramas.",
        ],
        en: [
          "Using the emotion-labeled feature dataframe, relationships between variables were studied (correlation matrix) along with each descriptor's per-class distribution through violin plots, box plots and histograms.",
        ],
      },
      figures: [
        {
          src: `${dir}/matriz-correlacion.png`,
          alt: { es: "Matriz de correlación de los descriptores", en: "Feature correlation matrix" },
          caption: { es: "Matriz de correlación entre los 40 descriptores y la emoción.", en: "Correlation matrix between the 40 descriptors and the emotion label." },
        },
        {
          src: `${dir}/diagrama-violin-cruces-por-cero.png`,
          alt: { es: "Diagrama de violín de cruces por cero por emoción", en: "Violin plot of zero crossings per emotion" },
          caption: { es: "Distribución y densidad de probabilidad de los cruces por cero para cada emoción.", en: "Distribution and probability density of zero crossings per emotion." },
        },
        {
          src: `${dir}/diagramas-cajas.png`,
          alt: { es: "Diagramas de cajas por emoción", en: "Box plots per emotion" },
          caption: { es: "Energía, RMS, intensidad, cruces por cero y frecuencia fundamental por emoción.", en: "Energy, RMS, intensity, zero crossings and fundamental frequency per emotion." },
        },
        {
          src: `${dir}/histogramas-descriptores.png`,
          alt: { es: "Histogramas de los descriptores", en: "Feature histograms" },
          caption: { es: "Histogramas de todos los descriptores del dataset.", en: "Histograms of every descriptor in the dataset." },
        },
      ],
    },
    {
      id: "modelos",
      title: { es: "Modelos de clasificación", en: "Classification models" },
      terms: [
        { term: "Random Forest", text: { es: "Ensamble de árboles de decisión que reduce el sobreajuste combinando sus predicciones.", en: "Ensemble of decision trees that reduces overfitting by combining their predictions." } },
        { term: { es: "Árboles de decisión", en: "Decision trees" }, text: { es: "Reglas de decisión interpretables, propensas al sobreajuste.", en: "Interpretable decision rules, prone to overfitting." } },
        { term: "SVM", text: { es: "Busca el hiperplano de máximo margen entre clases; adecuado en alta dimensionalidad.", en: "Finds the maximum-margin hyperplane between classes; suited to high dimensionality." } },
        { term: "XGBoost", text: { es: "Gradient boosting sobre árboles optimizados, robusto ante clases desbalanceadas.", en: "Gradient boosting over optimized trees, robust to class imbalance." } },
        { term: "AdaBoost", text: { es: "Clasificadores débiles entrenados iterativamente, ponderando las instancias mal clasificadas.", en: "Weak learners trained iteratively, re-weighting misclassified instances." } },
      ],
    },
    {
      id: "seleccion-caracteristicas",
      title: { es: "Selección de características (SelectKBest)", en: "Feature selection (SelectKBest)" },
      paragraphs: {
        es: [
          "SelectKBest se aplicó primero a Random Forest, el modelo con mejor desempeño, y después a AdaBoost, el de menor desempeño. En ambos casos la reducción del conjunto de descriptores disminuyó el rendimiento: la eliminación de variables relevantes afectó la capacidad de los modelos para discriminar entre emociones.",
        ],
        en: [
          "SelectKBest was first applied to Random Forest, the best-performing model, and then to AdaBoost, the weakest one. In both cases reducing the feature set lowered performance: removing relevant variables hurt the models' ability to discriminate between emotions.",
        ],
      },
    },
    {
      id: "evaluacion",
      title: { es: "Evaluación: Random Forest con SelectKBest", en: "Evaluation: Random Forest with SelectKBest" },
      paragraphs: {
        es: [
          "Evaluación sobre 464 muestras de prueba y 8 clases (azar ≈ 12,5 %): accuracy de 44,61 %, F1 macro de 0,44 y AUC por clase entre 0,75 y 0,93. La clase 2 obtuvo el mejor F1 (0,69) y el mayor AUC (0,93); la clase 3, el F1 más bajo (0,32).",
        ],
        en: [
          "Evaluated on 464 test samples and 8 classes (chance ≈ 12.5%): 44.61% accuracy, 0.44 macro F1 and per-class AUC between 0.75 and 0.93. Class 2 achieved the best F1 (0.69) and highest AUC (0.93); class 3 the lowest F1 (0.32).",
        ],
      },
      bars: {
        caption: {
          es: "F1 por clase (P: precisión, R: recall, n: muestras de prueba). Promedio macro: P 0.44 · R 0.44 · F1 0.44.",
          en: "Per-class F1 (P: precision, R: recall, n: test samples). Macro average: P 0.44 · R 0.44 · F1 0.44.",
        },
        metric: "F1",
        max: 1,
        rows: [
          { label: { es: "Clase 0", en: "Class 0" }, value: 0.43, details: "P 0.44 · R 0.42 · AUC 0.91 · n = 26" },
          { label: { es: "Clase 1", en: "Class 1" }, value: 0.38, details: "P 0.42 · R 0.35 · AUC 0.76 · n = 72" },
          { label: { es: "Clase 2", en: "Class 2" }, value: 0.69, details: "P 0.67 · R 0.72 · AUC 0.93 · n = 72" },
          { label: { es: "Clase 3", en: "Class 3" }, value: 0.32, details: "P 0.33 · R 0.31 · AUC 0.75 · n = 58" },
          { label: { es: "Clase 4", en: "Class 4" }, value: 0.32, details: "P 0.32 · R 0.32 · AUC 0.75 · n = 56" },
          { label: { es: "Clase 5", en: "Class 5" }, value: 0.36, details: "P 0.34 · R 0.38 · AUC 0.79 · n = 63" },
          { label: { es: "Clase 6", en: "Class 6" }, value: 0.58, details: "P 0.62 · R 0.54 · AUC 0.85 · n = 63" },
          { label: { es: "Clase 7", en: "Class 7" }, value: 0.42, details: "P 0.39 · R 0.46 · AUC 0.81 · n = 54" },
        ],
      },
      confusionMatrix: {
        caption: { es: "Matriz de confusión (filas: clase real; columnas: predicción)", en: "Confusion matrix (rows: true class; columns: prediction)" },
        labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
        axes: { es: { actual: "Real", predicted: "Predicción" }, en: { actual: "True", predicted: "Predicted" } },
        values: [
          [11, 1, 4, 7, 0, 2, 1, 0],
          [1, 25, 3, 5, 16, 5, 7, 10],
          [3, 1, 52, 7, 1, 8, 0, 0],
          [3, 3, 11, 18, 2, 12, 0, 9],
          [1, 10, 4, 2, 18, 5, 10, 6],
          [6, 8, 3, 6, 6, 24, 1, 9],
          [0, 7, 0, 4, 10, 3, 34, 5],
          [0, 5, 1, 6, 3, 12, 2, 25],
        ],
      },
    },
    {
      id: "interfaz",
      title: { es: "Prueba e interfaz gráfica", en: "Testing and graphical interface" },
      paragraphs: {
        es: [
          "Se cargaron audios nuevos para evaluar las predicciones del modelo Random Forest. La aplicación permite subir o grabar un audio, definir el tiempo de inicio y la duración del segmento a analizar, y devuelve la emoción predicha a partir de los descriptores calculados sobre ese segmento.",
        ],
        en: [
          "New recordings were loaded to evaluate the Random Forest predictions. The application lets the user upload or record audio, set the start time and duration of the segment to analyze, and returns the predicted emotion from the descriptors computed on that segment.",
        ],
      },
      figures: [
        {
          src: `${dir}/interfaz-grafica.png`,
          alt: { es: "Interfaz gráfica de predicción de emociones", en: "Emotion prediction graphical interface" },
          caption: { es: "Interfaz de VibeClassifier: carga de audio, segmento de 2 s y emoción predicha.", en: "VibeClassifier interface: audio upload, 2 s segment and predicted emotion." },
        },
      ],
    },
    {
      id: "conclusiones",
      title: { es: "Conclusiones", en: "Conclusions" },
      paragraphs: {
        es: [
          "Random Forest ofreció el mejor rendimiento entre los modelos evaluados, capturando la complejidad de los descriptores sin preprocesamiento adicional.",
          "SelectKBest redujo el rendimiento de Random Forest y de AdaBoost: en este problema la reducción de variables eliminó información discriminante, lo que muestra la importancia de seleccionar con cuidado las características que se descartan.",
        ],
        en: [
          "Random Forest delivered the best performance among the evaluated models, capturing the complexity of the descriptors without additional preprocessing.",
          "SelectKBest lowered the performance of both Random Forest and AdaBoost: in this problem, feature reduction removed discriminative information, showing the importance of carefully choosing which features to discard.",
        ],
      },
    },
  ],
};
