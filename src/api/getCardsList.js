// Ця функція отримує список карток з сервера
export const getCardsList = async () => {
  // Відправляємо запит на сервер для отримання списку карток
  const response = await fetch('../../public/cardList.json')

  // Перевіряємо, чи запит був успішним (статус 200 OK)
  if (!response.ok) {
    throw new Error('Помилка - ' + response.status) // Якщо статус не 200 OK, викидаємо помилку з відповідним повідомленням
  }

  // Повертаємо дані у форматі JSON
  return response.json()
}
