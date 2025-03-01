
## **Pokémon Explorer** 🏆  
A responsive web application that allows users to explore Pokémon details using **Next.js**, **Zustand**, and **Tailwind CSS**.  

🔗 **GitHub Repository:** [Pokemon_Explorer](https://github.com/anynomous001/Pokemon_Explorer.git)  

---

## **🚀 Features**
- 🔍 **Search Pokémon** by name  
- 📜 **List of Pokémon** with pagination  
- 📌 **Detailed Pokémon Stats** (abilities, types, moves, etc.)  
- ⚡ **Fast & Responsive UI** using **Next.js App Router**  
- 🌍 **Real-time state management** with **Zustand**  
- 🎨 **Modern UI** powered by **Tailwind CSS**  

---

## **📂 Folder Structure**
```
📦 Pokemon_Explorer
├── 📂 app/                    # Next.js App Router
│   ├── 📂 (Home)/              # Home layout
│   │   ├── layout.tsx         # Main layout
│   │   ├── page.tsx           # Home page
│   ├── 📂 pokemon/             # Pokémon details
│   │   ├── [id]/page.tsx      # Dynamic Pokémon details
│
├── 📂 components/              # UI Components
│   ├── Navbar.tsx             # Navigation bar
│   ├── SearchBar.tsx          # Pokémon search input
│   ├── PokemonList.tsx        # Pokémon listing
│   ├── PokemonCard.tsx        # Individual Pokémon card
│
├── 📂 store/                   # Zustand store
│   ├── pokemonState.ts         # Manages Pokémon state
│
├── 📂 styles/                  # TailwindCSS styling
│   ├── globals.css             # Global styles
│
├── .env.local                   # Environment variables (API URL)
├── package.json                 # Project dependencies
├── README.md                    # Project documentation
```

---

## **🛠️ Tech Stack**
- **Next.js** (App Router)  
- **TypeScript** (Optional)  
- **Zustand** (State Management)  
- **Tailwind CSS** (Styling)  
- **PokeAPI** (Data Source)  

---

## **🔧 Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/anynomous001/Pokemon_Explorer.git
cd Pokemon_Explorer
```

### **2️⃣ Install Dependencies**
```sh
npm install
# OR
yarn install
```

### **3️⃣ Setup Environment Variables**
Create a `.env.local` file and add:
```
NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2
```

### **4️⃣ Run the Development Server**
```sh
npm run dev
# OR
yarn dev
```
🚀 **Visit:** `http://localhost:3000`  

---

## **📜 Usage Guide**
1. **Home Page:** View a list of Pokémon with a search bar.  
2. **Search:** Type a Pokémon name to filter the list.  
3. **Details Page:** Click on a Pokémon to view stats, abilities, and moves.  

---

## **📸 Screenshots**
### 🔍 **Home Page**
![HomePage](https://via.placeholder.com/600x300?text=Pokemon+Explorer+Home)  

### 🏆 **Pokémon Details Page**
![DetailsPage](https://via.placeholder.com/600x300?text=Pokemon+Details)  

---

## **🤝 Contributing**
Want to contribute?  
- Fork the repo  
- Create a new branch (`git checkout -b feature-name`)  
- Commit changes (`git commit -m "Added feature"`)  
- Push (`git push origin feature-name`)  
- Open a Pull Request 🎉  

---

## **📜 License**
This project is **open-source** under the **MIT License**.  

---

This README provides clear **setup instructions, features, and usage details**. Let me know if you'd like any refinements! 🚀