export default {//类似计算属性
  powerCounter(state){
    return state.counter * state.counter;
  },
  handleStudent(state){
    return state.students.filter((x)=> x.age >20);
  },
  handleStudentLength(state,getters){
    // console.log( this.handleStudent(state))
    return getters.handleStudent.length;
  },
  handleStudentByParam(state){
    return age => {
      return state.students.filter((x)=> x.age >age);
    }
  }
}
