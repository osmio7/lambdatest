export const handler = async (event, context) => {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Hola Mundo desde Lambda!',
    };
  };  