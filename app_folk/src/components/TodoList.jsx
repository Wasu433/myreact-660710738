import React from 'react';

const TodoList = () => {
    // กำหนดข้อมูลเป็นรายวัน
    const weeklyTodos = {
        'วันจันทร์': [
            { id: 1, text: 'อ่านหนังสือ', completed: false },
            { id: 2, text: 'เวทเทรนนิ่ง', completed: true },
            { id: 3, text: 'คาดิโอ', completed: true },
        ],
        'วันอังคาร': [
            { id: 4, text: 'ทำสรุป', completed: false },
            { id: 5, text: 'เติมน้ำ', completed: false },
            { id: 5, text: 'กินอาหารที่มีประโยชน์', completed: false },
            

        ],
        'วันพุธ': [
            { id: 6, text: 'ดูซีรีย์', completed: false },
            { id: 7, text: 'ไปตลาดวันพุธ', completed: false },
            { id: 3, text: 'อ่าน ML', completed: false },
        ],
        'วันพฤหัสบดี': [
            { id: 9, text: 'กินชาเขียว', completed: false },
            { id: 2, text: 'เวทเทรนนิ่ง', completed: false },
            { id: 10, text: 'ดูซีรีย์', completed: false },
        ],
        'วันศุกร์': [
            { id: 10, text: 'สรุปการบ้าน', completed: false },
            { id: 2, text: 'เวทเทรนนิ่ง', completed: false },
            { id: 3, text: 'คาดิโอ', completed: false },
        ],
        'วันเสาร์': [
            { id: 11, text: 'ไปเรียน', completed: false },
            { id: 2, text: 'เวทเทรนนิ่ง', completed: false },
        ],
        'วันอาทิตย์': [
            { id: 8, text: 'ดุดฝุ่น', completed: false },
            { id: 9, text: 'ล้างจาน', completed: false },
            { id: 10, text: 'ซักผ้า', completed: false },
            { id: 10, text: 'ดูซีรีย์', completed: false },
        ]
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
            <h2>📅 สิ่งที่ต้องทำในทุกสัปดาห์</h2>

            {Object.entries(weeklyTodos).map(([day, todos]) => {
                const completedCount = todos.filter(todo => todo.completed).length;
                const totalCount = todos.length;
                const percentage = Math.round((completedCount / totalCount) * 100);

                return (
                    <div key={day} style={{
                        marginBottom: '30px',
                        padding: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        backgroundColor: '#fafafa',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ marginBottom: '10px' }}>{day}</h3>

                        {/* Progress Bar */}
                        <div style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: '20px',
                            padding: '3px',
                            margin: '10px 0'
                        }}>
                            <div style={{
                                backgroundColor: '#4caf50',
                                width: `${percentage}%`,
                                textAlign: 'center',
                                borderRadius: '17px',
                                padding: '6px 0',
                                color: 'white',
                                fontWeight: 'bold',
                                transition: 'width 0.3s ease'
                            }}>
                                {percentage}%
                            </div>
                        </div>

                        {/* Todo Items */}
                        {todos.map(todo => (
                            <div
                                key={todo.id}
                                style={{
                                    padding: '10px',
                                    margin: '6px 0',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ marginRight: '10px', fontSize: '18px' }}>
                                    {todo.completed ? '✅' : '⬜'}
                                </span>
                                <span style={{
                                    flex: 1,
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#666' : '#333'
                                }}>
                                    {todo.text}
                                </span>
                            </div>
                        ))}

                        {/* Summary */}
                        <div style={{
                            marginTop: '10px',
                            textAlign: 'center',
                            padding: '10px',
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            color: 'white',
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}>
                            ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
