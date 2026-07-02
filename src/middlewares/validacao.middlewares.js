const validar = (schema) => (req, res, next) => {
    const resultado = schema.safeParse(req.body);

    if (!resultado.success) {
        return res.status(400).json({
            error: resultado.error.issues
        });
    }

    req.body = resultado.data; 
    next();
};

const validarId = (schema) => (req, res, next) => {
    const resultado = schema.safeParse(req.params);

    if (!resultado.success) {
        return res.status(400).json({
            error: resultado.error.issues
        });
    }

    req.params = resultado.data;
    next();
};

export { validar, validarId };