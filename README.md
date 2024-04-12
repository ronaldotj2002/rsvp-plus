CREATE TABLE confirma_codigos ( id UUID DEFAULT uuid_generate_V4() PRIMARY KEY,
                                codigo VARCHAR(255) NOT NULL,
                                usado BOOLEAN NOT NULL
                                );

INSERT INTO confirma_codigos (codigo, usado)
VALUES ('272727', false)
ON CONFLICT (id) DO NOTHING;



-- Verificar se um código é válido e não foi usado
SELECT * FROM confirma_codigos WHERE codigo = '123456' AND NOT usado;

-- Marcar um código como usado
UPDATE confirma_codigos SET usado = TRUE WHERE codigo = '123456';