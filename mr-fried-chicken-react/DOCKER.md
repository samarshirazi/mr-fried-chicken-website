# 🐳 Docker Setup for Mr. Fried Chicken

Complete Docker environment for local development and production deployment.

## 📋 Prerequisites

- Docker Desktop or Docker Engine
- Docker Compose
- Git

## 🚀 Quick Start

### 1. **Development Environment** (Recommended for local testing)

```bash
# Start development server with hot reload
npm run docker:dev

# Or manually
docker-compose up app-dev
```

**Access:** `http://localhost:5173`

### 2. **Production Environment**

```bash
# Build and start production server
npm run docker:prod

# Or manually
docker-compose --profile production up app-prod
```

**Access:** `http://localhost:8080`

## 🔧 Available Docker Commands

### Development
```bash
# Start development environment
npm run docker:dev
docker-compose up app-dev

# Stop all containers
npm run docker:stop
docker-compose down

# Clean up everything (containers, volumes, images)
npm run docker:clean
docker-compose down -v --rmi all
```

### Production
```bash
# Build production image
npm run docker:build-prod
docker-compose --profile production build app-prod

# Run production server
npm run docker:prod
docker-compose --profile production up app-prod

# Build and run in one command
docker-compose --profile production up --build app-prod
```

### Advanced
```bash
# Build standalone Docker image
npm run docker:build
docker build -t mr-fried-chicken .

# Run with reverse proxy
docker-compose --profile proxy up
```

## 📁 Docker Files Structure

```
├── Dockerfile                 # Multi-stage build configuration
├── docker-compose.yml        # Container orchestration
├── .dockerignore             # Files to exclude from build
└── docker/
    ├── nginx.conf            # Nginx config for production
    └── nginx-proxy.conf      # Reverse proxy config
```

## 🏗️ Multi-Stage Build

The Dockerfile uses a multi-stage build for optimized images:

### **Development Stage**
- Based on `node:18-alpine`
- Includes dev dependencies
- Hot reload enabled
- Volume mounting for live code changes

### **Build Stage**
- Optimized build process
- Production dependencies only
- Creates optimized `/dist` folder

### **Production Stage**
- Based on `nginx:alpine`
- Serves static files via Nginx
- Gzip compression enabled
- Security headers configured

## 🌐 Port Configuration

| Environment | Port | Description |
|-------------|------|-------------|
| Development | 5173 | Vite dev server with HMR |
| Production | 8080 | Nginx serving built assets |
| Proxy | 80/443 | Reverse proxy (optional) |

## 📊 Environment Variables

Create `.env` files for different environments:

### `.env.development`
```env
NODE_ENV=development
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Mr. Fried Chicken (Dev)
```

### `.env.production`
```env
NODE_ENV=production
VITE_API_URL=https://api.mrfriedchicken.dk
VITE_APP_TITLE=Mr. Fried Chicken
```

## 🔧 Volume Mounting

### Development
- **Source code**: `./:/app` - Live code changes
- **Node modules**: `/app/node_modules` - Prevents conflicts

### Production
- **Built assets**: Static files served by Nginx
- **Config files**: Nginx configuration

## 🚦 Health Checks

Both environments include health check endpoints:

```bash
# Development health check
curl http://localhost:5173

# Production health check
curl http://localhost:8080/health
```

## 🛠️ Troubleshooting

### Common Issues

**1. Port already in use**
```bash
# Kill existing processes
sudo lsof -ti:5173 | xargs kill -9
sudo lsof -ti:8080 | xargs kill -9
```

**2. Permission issues**
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

**3. Cache issues**
```bash
# Clear Docker cache
docker system prune -a --volumes
```

**4. Node modules issues**
```bash
# Rebuild node modules in container
docker-compose exec app-dev npm install
```

### Performance Tips

**1. Use .dockerignore**
- Excludes unnecessary files from build context
- Reduces image size and build time

**2. Multi-stage builds**
- Separates build and runtime environments
- Smaller production images

**3. Layer caching**
- Package.json copied first for better caching
- Dependencies installed before code copy

## 📈 Production Deployment

### Method 1: Direct Docker Run
```bash
# Build production image
docker build -t mr-fried-chicken .

# Run container
docker run -p 80:80 mr-fried-chicken
```

### Method 2: Docker Compose
```bash
# Production deployment
docker-compose --profile production up -d
```

### Method 3: With Reverse Proxy
```bash
# Full stack with proxy
docker-compose --profile proxy up -d
```

## 🔐 Security Features

- **Non-root user** in containers
- **Security headers** via Nginx
- **Gzip compression** for performance
- **Health checks** for monitoring
- **Resource limits** configurable

## 📝 Logs and Monitoring

```bash
# View logs
docker-compose logs -f app-dev
docker-compose logs -f app-prod

# Monitor resource usage
docker stats

# Execute commands in running container
docker-compose exec app-dev sh
```

## 🚀 CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Build and Deploy
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Build Docker image
        run: docker build -t mr-fried-chicken .
        
      - name: Run tests
        run: docker run mr-fried-chicken npm test
        
      - name: Deploy to production
        run: docker-compose --profile production up -d
```

---

🍗 **Happy Dockerizing!** Your Mr. Fried Chicken website is now ready for any environment!