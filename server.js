const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const projectsFile = path.join(__dirname, 'projects.json');
const buildDir = path.join(__dirname, 'build');

// Get all projects
app.get('/api/projects', (req, res) => {
  fs.readFile(projectsFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read projects' });
    }
    res.json(JSON.parse(data));
  });
});

// Add a new project
app.post('/api/projects', (req, res) => {
  const newProject = req.body;
  fs.readFile(projectsFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read projects' });
    }
    const projects = JSON.parse(data);
    projects.push(newProject);
    fs.writeFile(projectsFile, JSON.stringify(projects, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save project' });
      }
      res.status(201).json(newProject);
    });
  });
});

if (fs.existsSync(buildDir)) {
  app.use(express.static(buildDir));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
