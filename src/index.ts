import bcrypt from 'bcrypt';
import {hash, compare} from 'bcrypt';

// Function to hash a password
const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // You can adjust the salt rounds as needed
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

// Function to compare a plain text password with a hashed password
const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing password');
  }
};

// Example usage
const runExample = async () => {
  const password = 'myPlainPassword';
  const hashedPassword = await hashPassword(password);
  console.log(`Hashed Password: ${hashedPassword}`);

  const isMatch = await comparePassword(password, hashedPassword);
  console.log(`Password Match: ${isMatch}`);
};

// runExample();

const main = async () => {
  // take the user password
  const og = 'password@123';
  console.log('original password:', og)

  // hash the user password
  const hp = await hash(og, 10);
  console.log('hashed password:', hp);

  // compare the user password with hashed password
  const wrongpassword = '123'
  const validPassoword1 = await compare(wrongpassword, hp)
  console.log("\nvalidation for wrong passoword:", validPassoword1)

  const validPassoword2 = await compare(og, hp)
  console.log("validation for correct passoword:", validPassoword2)
}

main ()