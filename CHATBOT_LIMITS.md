# ChatBot del portfolio

## Cómo funciona

```
Navegador (ChatBot.jsx) ──POST /api/chat──▶ Función de Vercel (api/chat.js) ──▶ Groq
```

- La **API key de Groq solo vive en el servidor** (`GROQ_API_KEY`, sin prefijo `VITE_`). Nunca se incluye en el JavaScript que descarga el visitante.
- El **prompt con la información de Daniel** también está en el servidor (`api/chat.js`), así que nadie puede modificarlo desde el navegador.
- Modelo: `openai/gpt-oss-20b` en Groq (plan gratuito).

## Coste: 0 €

La cuenta de Groq está en el plan gratuito y sin tarjeta, así que **no se puede cobrar nada**. Si se superan los límites, Groq responde con un error 429 y el chat muestra "El asistente está muy solicitado ahora mismo".

Límites del plan gratuito para `openai/gpt-oss-20b` (leídos de las cabeceras de la API):

| Límite                | Valor  |
| --------------------- | ------ |
| Peticiones por día    | 1.000  |
| Tokens por minuto     | 8.000  |

Cada pregunta gasta unos 1.000–1.500 tokens (sobre todo por el prompt del sistema).

## Protecciones en `api/chat.js`

| Protección                    | Valor                                    |
| ----------------------------- | ---------------------------------------- |
| Mensajes por IP y minuto      | 6                                        |
| Mensajes por IP y hora        | 30                                       |
| Historial enviado al modelo   | Últimos 8 mensajes                       |
| Longitud máxima del mensaje   | 300 caracteres                           |
| Tokens máximos de respuesta   | 500 (incluye el razonamiento del modelo) |

Los límites por IP se guardan en memoria de cada instancia de la función, así que son orientativos: frenan a un visitante que hace spam, pero se reinician cuando Vercel recicla la instancia. Si algún día hiciera falta un límite estricto, se puede usar Upstash Redis (tiene plan gratuito).

## Configuración

**Local** (`npm run dev`): pon la key en `.env`:

```
GROQ_API_KEY=gsk_...
```

`vite.config.js` incluye un pequeño plugin que sirve `/api/chat` en desarrollo, así que no hace falta `vercel dev`.

**Producción (Vercel)**: Project → Settings → Environment Variables → añade `GROQ_API_KEY` y vuelve a desplegar.

## Cambiar el modelo

Edita la constante `MODEL` en `api/chat.js`. Para ver los modelos disponibles:

```bash
curl https://api.groq.com/openai/v1/models -H "Authorization: Bearer $GROQ_API_KEY"
```
