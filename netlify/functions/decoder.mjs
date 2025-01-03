import '../../decoder/axioma-qalcosonic-w1/javascript/decoder.js';

export default async (req, context) => {
    console.log("payload", req.body.payload)
    switch (context.params.device) {
        case "axioma-qalcosonic-w1":
            const payload = hexToBytes(req.body.payload);
            const port = req.body.port;
            decoded = doDecode(payload, port);
            return Response.json(decoded, { status: 200 });
        default:
            return new Response("Unknown decoder", { status: 404 });
    }
};

export const config = {
    path: "/decoders/:device"
};