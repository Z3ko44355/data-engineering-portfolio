import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4',
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 50;
const contentWidth = pageWidth - margin * 2;

// Helper function for section titles
function drawSectionHeader(title, y) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42); // Black / slate 900
  doc.text(title, margin, y);

  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(1.2);
  doc.line(margin, y + 4, pageWidth - margin, y + 4);
  return y + 18;
}

// Helper function for bullets
function drawBullet(text, y, indent = 12) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  // draw bullet dot
  doc.circle(margin + indent, y - 3, 2, 'F');

  const wrapped = doc.splitTextToSize(text, contentWidth - indent - 8);
  doc.text(wrapped, margin + indent + 8, y);
  return y + wrapped.length * 13 + 3;
}

// ================= PAGE 1 =================
let y = margin + 15;

// Header: Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(26);
doc.setTextColor(0, 0, 0);
doc.text('Zakaria Ahmed', margin, y);
y += 24;

// Subheader: Title
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(51, 65, 85);
doc.text('DATA ENGINEERING TRAINEE | CS STUDENT', margin, y);
y += 18;

// Contact info
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(30, 41, 59);
doc.text('Egypt  |  +20 106 197 2725  |  zeko40436@gmail.com', margin, y);
y += 16;

// Links
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(2, 132, 199);
doc.text('GitHub: https://github.com/Z3ko44355   |   LinkedIn: https://www.linkedin.com/in/zakaria-ahmed-de', margin, y);
y += 26;

// Objective
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(0, 0, 0);
doc.text('Objective', margin, y);
y += 14;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
const objectiveText = 'Driven 3rd-year Computer Science student at New Mansoura University specializing in Data Engineering. Possesses a solid foundation in Python, SQL, PySpark, relational database design, and cloud infrastructure. Currently building advanced hands-on data skills through the Digital Egypt Pioneers Initiative (DEPI) Data Engineering track and NTI Cloud Computing training. Eager to leverage strong problem-solving skills and pipeline development expertise to contribute to scalable data solutions.';
const objLines = doc.splitTextToSize(objectiveText, contentWidth);
doc.text(objLines, margin, y);
y += objLines.length * 13.5 + 16;

// Education
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(0, 0, 0);
doc.text('Education', margin, y);
y += 14;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text('Bachelor of Computer Science', margin, y);
const bcsWidth = doc.getTextWidth('Bachelor of Computer Science');
doc.setFont('helvetica', 'italic');
doc.setTextColor(71, 85, 105);
doc.text(' | New Mansoura University, Egypt', margin + bcsWidth, y);
const nmuWidth = doc.getTextWidth(' | New Mansoura University, Egypt');
doc.setFont('helvetica', 'normal');
doc.text('   September 2023 \u2013 Present', margin + bcsWidth + nmuWidth, y);
y += 15;

y = drawBullet('Current Status: Completing 3rd Year.', y);
y = drawBullet('Relevant Coursework: Database Management Systems (DBMS), Data Structures & Algorithms, Object-Oriented Programming (OOP), Operating Systems.', y);
y += 14;

// Technical Skills
y = drawSectionHeader('TECHNICAL SKILLS', y);

// Bullets for tech skills
function drawSkillBullet(category, items, curY) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.circle(margin + 12, curY - 3, 2, 'F');
  const catText = `${category}: `;
  doc.text(catText, margin + 20, curY);
  const catWidth = doc.getTextWidth(catText);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const wrapped = doc.splitTextToSize(items, contentWidth - 20 - catWidth);
  doc.text(wrapped[0], margin + 20 + catWidth, curY);

  if (wrapped.length > 1) {
    const remaining = wrapped.slice(1);
    doc.text(remaining, margin + 20, curY + 13);
    return curY + wrapped.length * 13 + 3;
  }
  return curY + 16;
}

y = drawSkillBullet('Data Engineering & Databases', 'SQL (Relational Database Design, Query Optimization), PySpark, Data Pipeline Concepts (ETL/ELT), Database Management Systems (SQL Server, MySQL).', y);
y = drawSkillBullet('Programming Languages', 'Python, SQL, C#, C++.', y);
y = drawSkillBullet('Cloud & DevOps Fundamentals', 'Cloud Computing Architecture (NTI), Linux Fundamentals, Git & GitHub Version Control.', y);
y = drawSkillBullet('Tools & Environments', 'VS Code, CLion, Jupyter Notebook, Anaconda, Git, GitHub.', y);
y = drawSkillBullet('Core Competencies', 'Problem Solving, Competitive Programming (ICPC NMU Community), System Architecture Logic.', y);
y += 14;

// Experience & Professional Training
y = drawSectionHeader('EXPERIENCE & PROFESSIONAL TRAINING', y);

doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(15, 23, 42);
doc.text('Data Engineering Trainee', margin, y);
const roleW = doc.getTextWidth('Data Engineering Trainee');
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text(' | Digital Egypt Pioneers Initiative (DEPI)', margin + roleW, y);
y += 14;

doc.setFont('helvetica', 'italic');
doc.setFontSize(9.5);
doc.setTextColor(100, 116, 139);
doc.text('May 2026 \u2013 Present', margin, y);
y += 14;

y = drawBullet('Enrolled in an intensive, practical training program focusing on end-to-end Data Engineering workflows.', y);
y = drawBullet('Developing skills in building data pipelines, handling structured data, database modeling, and big data execution.', y);
y = drawBullet('Applying Python, SQL, and data transformation techniques to solve practical real-world data problems.', y);


// ================= PAGE 2 =================
doc.addPage();
y = margin + 15;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(15, 23, 42);
doc.text('Cloud Computing Trainee', margin, y);
const cRoleW = doc.getTextWidth('Cloud Computing Trainee');
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text(' | National Telecommunication Institute (NTI)', margin + cRoleW, y);
y += 14;

doc.setFont('helvetica', 'italic');
doc.setFontSize(9.5);
doc.setTextColor(100, 116, 139);
doc.text('2026', margin, y);
y += 14;

y = drawBullet('Training in core cloud computing concepts, cloud infrastructure services (IaaS, PaaS, SaaS), and deployment models.', y);
y = drawBullet('Gaining hands-on knowledge of cloud network management, security basics, and scalable infrastructure setups to support data workloads.', y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(15, 23, 42);
doc.text('Full Stack Development Intern', margin, y);
const fsRoleW = doc.getTextWidth('Full Stack Development Intern');
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text(' | National Telecommunication Institute (NTI)', margin + fsRoleW, y);
y += 14;

doc.setFont('helvetica', 'italic');
doc.setFontSize(9.5);
doc.setTextColor(100, 116, 139);
doc.text('2025', margin, y);
y += 14;

y = drawBullet('Developed responsive web application components and backend business logic using C# and SQL.', y);
y = drawBullet('Integrated backend services with relational databases and applied Git workflows for project collaboration.', y);
y += 14;

// Projects
y = drawSectionHeader('PROJECTS', y);

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text('Integrated Cafe Management System (Database & Backend Lead)', margin, y);
y += 13;

y = drawBullet('Architected a desktop management application handling orders, inventory control, and operational metrics.', y);
y = drawBullet('Designed relational database schemas in SQL to support persistent storage and real-time transaction tracking.', y);
y = drawBullet('Implemented backend logic in C# for data validation, inventory updates, and analytical reporting.', y);
y += 8;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text('Data Processing & ETL Lab Projects (DataCamp / IBM Data Engineering Roadmap)', margin, y);
y += 13;

y = drawBullet('Built data processing scripts using Python (Pandas/PySpark) and SQL to extract, clean, and transform raw datasets.', y);
y = drawBullet('Designed modular query routines to model analytical tables and generate structured reports.', y);
y += 14;

// Certifications & Self-Study
y = drawSectionHeader('CERTIFICATIONS & SELF-STUDY', y);

y = drawBullet('Digital Egypt Pioneers Initiative (DEPI): Data Engineering Professional Track (In Progress).', y);
y = drawBullet('NTI Training Certificates: Cloud Computing & Full-Stack Development.', y);
y = drawBullet('IBM Data Engineering & DataCamp Data Engineer in Python Track: (In Progress).', y);
y = drawBullet('Data Engineer in Python Career Track \u2013 DataCamp: (In Progress / Active Track).', y);
y += 14;

// Languages
y = drawSectionHeader('LANGUAGES', y);

y = drawBullet('Arabic: Native.', y);
y = drawBullet('English: Professional Working Proficiency.', y);
y += 14;

// Additional Information
y = drawSectionHeader('ADDITIONAL INFORMATION', y);

y = drawBullet('Fast Learner', y);
y = drawBullet('Problem Solver', y);
y = drawBullet('Team Player', y);

// Output to public/resume.pdf
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'resume.pdf');
const pdfData = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfData));
console.log('Successfully generated public/resume.pdf!');
