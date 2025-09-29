#!/usr/bin/env python3

# Simple script to create dummy PDF files
import os

def create_dummy_pdf(filename, title, content):
    """Create a simple text file that mimics PDF structure"""
    pdf_content = f"""%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 24 Tf
50 750 Td
({title}) Tj
0 -50 Td
/F1 12 Tf
({content}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000173 00000 n 
0000000301 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
456
%%EOF"""
    
    with open(filename, 'w') as f:
        f.write(pdf_content)

# Create the resume directory
os.makedirs('/Volumes/mary_ssd/my_projects/mariya_portfolio/public/resume', exist_ok=True)

# Create main resume
create_dummy_pdf(
    '/Volumes/mary_ssd/my_projects/mariya_portfolio/public/resume/kindrat_mariya_resume.pdf',
    'Mariya Kindrat - Full Stack Developer Resume',
    'Professional resume with experience in React, Node.js, and modern web technologies.'
)

# Create reference files
references = [
    {
        'filename': 'reference_john_smith.pdf',
        'title': 'Reference Letter - John Smith',
        'content': 'Senior Developer at TechCorp. Mariya worked under my supervision for 2 years.'
    },
    {
        'filename': 'reference_sarah_johnson.pdf', 
        'title': 'Reference Letter - Sarah Johnson',
        'content': 'Project Manager at WebSolutions. Mariya delivered excellent results on multiple projects.'
    },
    {
        'filename': 'reference_mike_davis.pdf',
        'title': 'Reference Letter - Mike Davis', 
        'content': 'CTO at StartupXYZ. Mariya showed exceptional problem-solving skills and leadership.'
    },
    {
        'filename': 'reference_lisa_brown.pdf',
        'title': 'Reference Letter - Lisa Brown',
        'content': 'Team Lead at DevCompany. Mariya is a reliable and skilled full-stack developer.'
    }
]

for ref in references:
    create_dummy_pdf(
        f'/Volumes/mary_ssd/my_projects/mariya_portfolio/public/resume/{ref["filename"]}',
        ref['title'],
        ref['content']
    )

print("Created dummy PDF files successfully!")