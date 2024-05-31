type User1 = {
    name: string;
    surname: string;
    email: string;
    password: string;
}
  
function createOrUpdateUser(initialValues: Partial<User>): Partial<User1> {
    return initialValues;
    
} 
