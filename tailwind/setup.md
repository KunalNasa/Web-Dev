## how to Setup Tailwind CSS

Step 1 : Run the following commands
```
npm install -D tailwindcss
npx tailwind init
```

step 2 : update tailwind.config.js file to include this line
```
content: ["*.html"],
```

Step 3 : create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4 : include the src/output.css to your html

Step 5 : Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Modifier	Media query
max-sm	@media not all and (min-width: 640px) { ... }
max-md	@media not all and (min-width: 768px) { ... }
max-lg	@media not all and (min-width: 1024px) { ... }
max-xl	@media not all and (min-width: 1280px) { ... }
max-2xl	@media not all and (min-width: 1536px) { ... }