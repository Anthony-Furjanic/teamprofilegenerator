
const Employee= require("../lib/Employee")


test("can we create an employee object?",()=>{
    const Anthony= new Employee()
    expect(typeof(Anthony)).toBe("object")
})

test("Can we add an email?",()=>{
    const Anthony= new Employee("Anthony","123","ab123@no.com")
    expect(Anthony.email).toBe("ab123@no.com")
    
}
)
test("Can we add an email?",()=>{
    const Anthony= new Employee("Anthony","123","ab123@no.com")
    expect(Anthony.email).toBe("ab123@no.com")
    
}
)