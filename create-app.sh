#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Print step information
step() {
  echo -e "${BLUE}==> ${GREEN}$1${NC}"
}

# Print substep information
substep() {
  echo -e "    ${YELLOW}-> ${NC}$1"
}

# Print error message
error() {
  echo -e "${RED}ERROR: $1${NC}"
  exit 1
}

# Check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Create a file with content
create_file() {
  local file_path=$1
  local content=$2
  
  mkdir -p "$(dirname "$file_path")"
  echo "$content" > "$file_path"
  substep "Created $file_path"
}

# Main function
main() {
  # Check if necessary commands exist
  step "Checking prerequisites"
  if ! command_exists npm; then
    error "npm is not installed. Please install Node.js and npm."
  fi
  if ! command_exists npx; then
    error "npx is not installed. Please install Node.js and npm."
  fi
  
  # Ask for project name
  step "Setting up project"
  read -p "Enter project name (default: urgent-app): " project_name
  project_name=${project_name:-urgent-app}
  
  # Create React app with TypeScript template
  step "Creating React app with TypeScript template"
  npx create-react-app "$project_name" --template typescript
  
  # Change directory to project
  cd "$project_name"
  
  # Install dependencies
  step "Installing dependencies"
  npm install bootstrap react-bootstrap react-bootstrap-icons react-router-dom
  
  # Install dev dependencies
  step "Installing dev dependencies"
  npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier
  
  # Create project structure
  step "Creating project structure"
  
  # Create base directories
  mkdir -p src/{components/{layout,auth,dashboard/components},services,types,utils,hooks,contexts,routes}
  
  # Create basic component structure
  substep "Creating component structure"
  
  # Layout components
  create_file "src/components/layout/AppLayout.tsx" "import React from 'react';
import './AppLayout.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className=\"app-layout\">
      {/* Header will go here */}
      <main className=\"main-content\">
        {children}
      </main>
      {/* Footer will go here */}
    </div>
  );
};

export default AppLayout;"

  create_file "src/components/layout/AppLayout.css" "/* AppLayout styles will go here */"
  create_file "src/components/layout/index.ts" "export { default } from './AppLayout';"
  
  # Auth components
  create_file "src/components/auth/LoginPage.tsx" "import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import './LoginPage.css';
import { useAuth } from '../../hooks/useAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Container className=\"login-container\">
      <Card className=\"login-card\">
        <Card.Body>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            {/* Form fields will go here */}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;"

  create_file "src/components/auth/LoginPage.css" "/* LoginPage styles will go here */"
  create_file "src/components/auth/index.ts" "export { default } from './LoginPage';"
  
  # Dashboard components
  create_file "src/components/dashboard/Dashboard.tsx" "import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className=\"dashboard\">
      <h1>Dashboard</h1>
      {/* Dashboard content will go here */}
    </div>
  );
};

export default Dashboard;"

  create_file "src/components/dashboard/Dashboard.css" "/* Dashboard styles will go here */"
  create_file "src/components/dashboard/index.ts" "export { default } from './Dashboard';"
  
  # Dashboard subcomponents
  create_file "src/components/dashboard/components/StatsCard.tsx" "import React from 'react';
import { Card } from 'react-bootstrap';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => {
  return (
    <Card className=\"stats-card\">
      <Card.Body>
        {/* Stats card content will go here */}
      </Card.Body>
    </Card>
  );
};

export default StatsCard;"

  create_file "src/components/dashboard/components/ProjectTable.tsx" "import React from 'react';
import { Table, Badge, ProgressBar } from 'react-bootstrap';

const ProjectTable: React.FC = () => {
  return (
    <Table responsive className=\"project-table\">
      {/* Table content will go here */}
    </Table>
  );
};

export default ProjectTable;"

  create_file "src/components/dashboard/components/TaskList.tsx" "import React from 'react';
import { Card } from 'react-bootstrap';

const TaskList: React.FC = () => {
  return (
    <div className=\"task-list\">
      {/* Task list content will go here */}
    </div>
  );
};

export default TaskList;"
  
  # Services
  create_file "src/services/api.ts" "// API service functions
export const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

export const apiRequest = async <T>(
  endpoint: string, 
  method: string = 'GET', 
  data?: any
): Promise<T> => {
  // API request implementation will go here
  return {} as T;
};"

  create_file "src/services/auth.ts" "import { apiRequest } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Login implementation will go here
  return {} as LoginResponse;
};"

  create_file "src/services/index.ts" "export * from './api';
export * from './auth';"
  
  # Types
  create_file "src/types/auth.types.ts" "export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}"

  create_file "src/types/user.types.ts" "export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
}"

  create_file "src/types/index.ts" "export * from './auth.types';
export * from './user.types';"
  
  # Utils
  create_file "src/utils/helpers.ts" "// Helper functions
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
};"

  create_file "src/utils/constants.ts" "// App constants
export const APP_NAME = 'UrgentApp';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};"
  
  # Hooks
  create_file "src/hooks/useAuth.ts" "import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};"

  create_file "src/hooks/useAPI.ts" "import { useState } from 'react';
import { apiRequest } from '../services/api';

export const useAPI = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endpoint: string, method: string = 'GET', requestData?: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiRequest<T>(endpoint, method, requestData);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};"
  
  # Contexts
  create_file "src/contexts/AuthContext.tsx" "import React, { createContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types/auth.types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const user = localStorage.getItem('user');
      if (user) {
        setState({
          isAuthenticated: true,
          user: JSON.parse(user),
          loading: false,
          error: null
        });
      } else {
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulate API call
      // In a real app, this would call your auth service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = { id: '1', email, name: 'Demo User' };
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setState({
        isAuthenticated: true,
        user: mockUser,
        loading: false,
        error: null
      });
      
      return true;
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Invalid credentials'
      }));
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;"
  
  # Routes
  create_file "src/routes/AppRoutes.tsx" "import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AppLayout from '../components/layout/AppLayout';
import LoginPage from '../components/auth/LoginPage';
import Dashboard from '../components/dashboard/Dashboard';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to=\"/login\" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path=\"/login\" element={<LoginPage />} />
      
      <Route path=\"/\" element={
        <ProtectedRoute>
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </ProtectedRoute>
      } />
      
      <Route path=\"*\" element={<Navigate to=\"/\" replace />} />
    </Routes>
  );
};

export default AppRoutes;"
  
  # App and index files
  create_file "src/App.tsx" "import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;"

  create_file "src/App.css" "/* App styles will go here */"
  
  # Config files
  create_file ".eslintrc.js" "module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};"

  create_file ".prettierrc" "{
  \"semi\": true,
  \"tabWidth\": 2,
  \"printWidth\": 100,
  \"singleQuote\": true,
  \"trailingComma\": \"es5\",
  \"jsxBracketSameLine\": false,
  \"arrowParens\": \"avoid\"
}"

  # Update package.json scripts
  substep "Updating package.json scripts"
  npm pkg set scripts.lint="eslint src/**/*.{ts,tsx}"
  npm pkg set scripts.lint:fix="eslint --fix src/**/*.{ts,tsx}"
  npm pkg set scripts.format="prettier --write src/**/*.{ts,tsx,css,json}"
  
  # Final step
  step "Project setup complete!"
  echo -e "${GREEN}Successfully created project structure for ${YELLOW}${project_name}${GREEN}!${NC}"
  echo -e "To start the development server, run:${YELLOW}"
  echo -e "  cd $project_name"
  echo -e "  npm start${NC}"
}

# Run the main function
main