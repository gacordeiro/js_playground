const guardFromError = async (resolution, errorScreen = '../telas/erro.html') => {
  try {
    await resolution();
  } catch (e) {
    console.log(e);
    console.log(errorScreen);
    window.location.href = errorScreen;
  }
};

export const errorController = {
  guardFromError,
};
