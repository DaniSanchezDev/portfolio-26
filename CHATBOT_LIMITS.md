# Límites de Seguridad del ChatBot - Plan Free de Groq

## 🛡️ Protecciones Implementadas

El chatbot está configurado con múltiples capas de protección para asegurar que **NUNCA superes los límites del plan free de Groq**.

### 1. **Límites de Requests**

| Límite                          | Valor        | Razón                                                              |
| ------------------------------- | ------------ | ------------------------------------------------------------------ |
| **Máximo por hora**             | 15 requests  | Plan free permite ~30/min, usamos 15/hora para buen funcionamiento |
| **Máximo por día**              | 100 requests | Plan free permite ~500/día, usamos 100 para estar seguro           |
| **Delay mínimo entre requests** | 2 segundos   | Evita spam y saturación                                            |

### 2. **Límites de Contexto**

| Parámetro                      | Valor          | Razón                           |
| ------------------------------ | -------------- | ------------------------------- |
| **Mensajes en contexto**       | 5 últimos      | Reduce tokens enviados a la API |
| **Max tokens por respuesta**   | 200 tokens     | Limita respuestas largas        |
| **Longitud máxima de mensaje** | 300 caracteres | Evita mensajes enormes          |

### 3. **Caching de Respuestas**

- **Duración**: 1 hora
- **Beneficio**: Si alguien hace la misma pregunta, se devuelve la respuesta en caché sin usar API
- **Ahorro**: Reduce significativamente el uso de la API

## 📊 Estimación de Uso Mensual

Con estos límites:

- **Máximo diario**: 100 requests
- **Máximo mensual**: ~3,000 requests (100 × 30 días)
- **Límite de Groq**: 500 requests/día (15,000/mes)
- **Margen de seguridad**: 5x por debajo del límite

## ⚙️ Cómo Funcionan los Límites

### Límite Horario

```
- Se resetea cada 60 minutos
- Máximo 15 requests por ventana de 60 minutos
- Muestra: "Límite de 15 mensajes por hora alcanzado"
```

### Límite Diario

```
- Se resetea cada 24 horas (medianoche UTC)
- Máximo 100 requests por día
- Muestra: "Límite diario de 100 mensajes alcanzado"
```

### Delay Mínimo

```
- Espera 2 segundos entre requests
- Evita que alguien envíe múltiples mensajes rápidamente
- Muestra: "Espera un momento antes de enviar otro mensaje"
```

## 🔍 Monitoreo

El header del chat muestra en tiempo real:

```
Hoy: 78/100 | Hora: 12/15
```

Esto te permite ver cuántos requests has usado.

## 🚨 Qué Pasa Si Se Alcanza un Límite

1. El usuario ve un mensaje de error claro
2. El mensaje NO se envía a la API
3. No se consume ningún request
4. El usuario puede intentar de nuevo después del período de espera

## 💡 Optimizaciones Adicionales

1. **Caching**: Respuestas idénticas se sirven desde caché (sin API call)
2. **Contexto reducido**: Solo últimos 5 mensajes (vs 10 antes)
3. **Tokens limitados**: 200 tokens máximo por respuesta
4. **Mensajes cortos**: Máximo 300 caracteres por entrada

## ✅ Conclusión

**Estás protegido.** Con estos límites, tienes margen suficiente sin riesgo de superar el plan free de Groq.

Límite de Groq: **500 requests/día**  
Tu límite: **100 requests/día**  
**Margen: 5x de seguridad**
