

# Task 1: Coins Catalog

## Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/ck2010317/fevertokens-tech-test.git
   cd fevertokens-tech-test


2. Install dependencies.
    pnpm install

3. Run the project.
    pnpm run build
    pnpm run start -- --port=8000

Usage:
The main page lists the first 100 coins.
Click on a coin to see detailed information.
Use the back button to return to the main page.


# Task 2: Algorithmic
    Code in JavaScript:

    for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Hello';
  if (i % 5 === 0) output += 'World';
  if (i % 7 === 0) output += 'Yoo';
  console.log(output || i);
}

Output:
1
2
Hello
4
World
Hello
Yoo
8
Hello
World
11
Hello
13
Yoo
HelloWorld
16
...


Code in Python:
for i in range(1, 101):
    output = ''
    if i % 3 == 0:
        output += 'Hello'
    if i % 5 == 0:
        output += 'World'
    if i % 7 == 0:
        output += 'Yoo'
    print(output or i)

Output:
1
2
Hello
4
World
Hello
Yoo
8
Hello
World
11
Hello
13
Yoo
HelloWorld
16
...




# Task 3: Logic

### Scenario:
You are on the highway in your green car, and your friend contacts you to inform you that his red car has broken down. The challenge is that neither of you knows which direction he is in.

### Approach:
1. **Start driving in one direction (say East)**.
2. **Drive a short distance (D)**.
3. **If you don't find your friend**, turn around and drive back the same distance (D) to the starting point.
4. **Next, drive twice the distance (2D) in the opposite direction (West)**.
5. **If you don't find your friend**, turn around and drive back the same distance (2D) to the starting point.
6. **Next, drive four times the initial distance (4D) in the initial direction (East)**.
7. **Continue this pattern**, doubling the distance each time and alternating directions.

### Illustration:
G = Green Car (You)
R = Red Car (Friend)
D = Initial distance

Initial State:
Starting Point: G

First Iteration:

Drive East: G --> |----D----|
Drive back: |----D----| <-- G
Drive West: G <-- |----2D----|
Drive back: |----2D----| --> G
Second Iteration:

Drive East: G --> |--------4D--------|
Drive back: |--------4D--------| <-- G
Drive West: G <-- |--------8D--------|
Drive back: |--------8D--------| --> G

Continue doubling the distance and alternating directions until you find the red car.
This approach ensures you will eventually find your friend's car by systematically covering increasing distances in both directions.

