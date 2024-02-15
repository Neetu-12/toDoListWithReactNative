import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-web';
import { IconButton, Colors } from 'react-native-paper';
import Fallback from '../components/Fallback';

const ToDoScreen = () => {
    // Init local states
    const [TodoList, setTodoList] = useState("");
    const [TodoListAdd, setTodoListAdd] = useState([]);
    const [editTodoList, seteditTodoList] = useState(false);

    // handle add toDo
    let handledAddTodo = (execution, index) => {
        // structure of single todo   
        // if (TodoList === "") {
        //     return; // early return
        // }
        if (execution == "addTodo" && TodoList != "") {
            // console.log(TodoListAdd, TodoList);
            setTodoListAdd([...TodoListAdd, TodoList]);
            setTodoList("");
            // console.log(editTodoList);
            if (editTodoList === true) {
                seteditTodoList(false)
            }
        }
        else if (execution == "edit") {
            seteditTodoList(true)
            setTodoList(TodoListAdd[index]);
            setTodoListAdd((TodoListAdd.filter((elem, elemIndex) => {
                return elemIndex !== index
            })));
        }
        else if (execution == 'delete') {
            setTodoListAdd((TodoListAdd.filter((elem, elemIndex) => {
                return elemIndex !== index
            })));
        }
    }

    //  delete doTo one by one
    // let deleteTodo = (id) => {
    //     const updatedTodo = TodoListAdd.filter((TodoList) => TodoList.id !== id);
    //     setTodoListAdd(updatedTodo);
    // }

    // handle edit
    // let handleEditTodo = (TodoList) => {
    //     seteditTodoList(TodoList);
    //     setTodoList(TodoList.title)
    // }

    // handle update
    // let handleUpdateTodo = () => {
    //     const updatedTodo = TodoListAdd.map((item) => {
    //         if (item.id === editTodoList.id) {
    //             return { ...item, title: TodoList }
    //         }
    //         return item;
    //     });

    //     setTodoListAdd(updatedTodo);
    //     seteditTodoList(null);
    //     setTodoList("");
    // }

    // Render todo list
    // let renderTodo = ({ item, index }) => {
    //     return (
    //         <View style={{ backgroundColor: "#1e90ff", marginTop: 19, padding: 8, marginLeft: 18, width: 347, borderRadius: 6, flexDirection: "row", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3 }}>
    //             <Text style={{ fontWeight: "800", fontSize: 20, color: "white", flex: 1 }}>{item.title}</Text>
    //             <IconButton icon="pencil" iconColor='#fff' onPress={() => handleEditTodo(item)} />
    //             <IconButton icon="trash-can" iconColor='#fff' onPress={() => deleteTodo(item.id)} />
    //         </View>
    //     )
    // }

    return (
        <SafeAreaView>
            <View style={{
                marginHorizontal: 16, flexDirection: "center", alignItems: "center", justifyContent: 'center', paddingVertical: 18,
            }}>
                <TextInput style={{ borderWidth: 2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 12, paddingHorizontal: 16, width: 350 }} placeholder='Write list...' value={TodoList} onChangeText={(userText) => setTodoList(userText)} />
            </View>

            {
                editTodoList ?
                    <TouchableOpacity style={{ width: 350, backgroundColor: "black", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }} onPress={() => {
                        handledAddTodo("addTodo")
                    }}>
                        <Text style={{
                            textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold"
                        }}>Save</Text>
                    </TouchableOpacity> :

                    <TouchableOpacity style={{ width: 350, backgroundColor: "black", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }} onPress={() => {
                        handledAddTodo("addTodo")
                    }}>
                        {/* did some changes above line in handledAddTodo*/}
                        <Text style={{
                            textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold"
                        }}>Add</Text>
                    </TouchableOpacity>
            }

            <FlatList data={TodoListAdd} renderItem={(item) => {
                return (
                    <View style={{ backgroundColor: "#1e90ff", marginTop: 19, padding: 8, marginLeft: 18, width: 347, borderRadius: 6, flexDirection: "row", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3 }}>
                        <Text style={{ fontWeight: "800", fontSize: 20, color: "white", flex: 1 }}>{item.item}</Text>
                        <IconButton icon="pencil" iconColor='#fff' onPress={() => handledAddTodo("edit", item.index)} />
                        <IconButton icon="trash-can" iconColor='#fff' onPress={() => handledAddTodo("delete", item.index)} />
                    </View>
                )
            }} />

            {TodoListAdd.length <= 0 && <Fallback />}

        </SafeAreaView>

    )
}

export default ToDoScreen;
