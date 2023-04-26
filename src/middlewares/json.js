export async function json(req, res) {
    const buffers = []

    // Percorrer cada pedaço de dado que chega
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    res.setHeader('Content-Type', 'application/json')
}