// Raw data mapped from Test Data.md
const coursesData = [
    {
        id: "che110",
        course: "CHE 110",
        tests: [
            { id: "che110-t1", name: "Attendance", details: "5 marks" },
            { id: "che110-t2", name: "CA 1", details: "Project Allotted (Part of 40 marks CA)" },
            { id: "che110-t3", name: "CA 2", details: "MCQ (Unit I to III -- 30 Question)" },
            { id: "che110-t4", name: "CA 3", details: "MCQ (Unit I to V -- 30 Question)" },
            { id: "che110-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "che110-t6", name: "ETT", details: "MCQ Type (Weightage: 35 marks)" }
        ]
    },
    {
        id: "mth165",
        course: "MTH 165",
        tests: [
            { id: "mth165-t1", name: "Attendance", details: "5 marks" },
            { id: "mth165-t2", name: "CA 1", details: "Till Unit 2 (Part of 25 marks CA)" },
            { id: "mth165-t3", name: "CA 2", details: "--" },
            { id: "mth165-t4", name: "CA 3", details: "--" },
            { id: "mth165-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "mth165-t6", name: "ETT", details: "MCQ + Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "ece131",
        course: "ECE 131",
        tests: [
            { id: "ece131-t1", name: "Attendance", details: "5 marks" },
            { id: "ece131-t2", name: "CA 1", details: "Till Unit 2 (Part of 25 marks CA)" },
            { id: "ece131-t3", name: "CA 2", details: "Project based" },
            { id: "ece131-t4", name: "CA 3", details: "Test" },
            { id: "ece131-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "ece131-t6", name: "ETT", details: "MCQ + Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "ece132",
        course: "ECE 132",
        tests: [
            { id: "ece132-t1", name: "Attendance", details: "5 marks" },
            { id: "ece132-t2", name: "CAP - WTP 1", details: "Till Mid term (Part of 45 marks includes WTP & Practical copy)" },
            { id: "ece132-t3", name: "CAP - WTP 2", details: "Before End Term" },
            { id: "ece132-t4", name: "ETP", details: "Weightage: 50 marks" }
        ]
    },
    {
        id: "ece181",
        course: "ECE 181",
        tests: [
            { id: "ece181-t1", name: "Attendance", details: "5 marks" },
            { id: "ece181-t2", name: "CA 1", details: "3 Ques (Part of 25 marks CA)" },
            { id: "ece181-t3", name: "CA 2", details: "Python Project" },
            { id: "ece181-t4", name: "CA 3", details: "Subjective test covering CA 1 & CA 2 (optional)" },
            { id: "ece181-t5", name: "Practical Test", details: "3 Practical tests" },
            { id: "ece181-t6", name: "ETP", details: "Weightage: 50 marks" }
        ]
    },
    {
        id: "ece112",
        course: "ECE 112",
        tests: [
            { id: "ece112-t1", name: "Attendance", details: "5 marks" },
            { id: "ece112-t2", name: "CA 1", details: "Idea based (Part of 65 marks CA)" },
            { id: "ece112-t3", name: "CA 2", details: "Physical Robotic Based moveable project" },
            { id: "ece112-t4", name: "ETP", details: "Weightage: 30 marks -- upgrade the CA 2 project" }
        ]
    },
    {
        id: "cse111",
        course: "CSE 111",
        tests: [
            { id: "cse111-t1", name: "Attendance", details: "30 Marks" },
            { id: "cse111-t2", name: "CA 1", details: "Test (Weightage: 25% of 70 marks CA)" },
            { id: "cse111-t3", name: "CA 2", details: "Edu Revolution Task (Weightage: 25%)" },
            { id: "cse111-t4", name: "CA 3", details: "Assignment (Weightage: 25%)" },
            { id: "cse111-t5", name: "CA 4", details: "Design Your Dream CV (Weightage: 25%)" }
        ]
    },
    {
        id: "mec136",
        course: "MEC 136",
        tests: [
            { id: "mec136-t1", name: "Attendance", details: "5 marks" },
            { id: "mec136-t2", name: "CA 1", details: "Test (Weightage: 50% of 25 marks CA)" },
            { id: "mec136-t3", name: "CA 2", details: "Test (Weightage: 50%)" },
            { id: "mec136-t4", name: "CA 3", details: "Test: optional (Weightage: 50%)" },
            { id: "mec136-t5", name: "MTT", details: "Subjective (Weightage: 20 marks)" },
            { id: "mec136-t6", name: "ETT", details: "Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "mec139",
        course: "MEC 139",
        tests: [
            { id: "mec139-t1", name: "Attendance", details: "5 marks" },
            { id: "mec139-t2", name: "CAP", details: "Weightage: 45 marks (includes project file)" },
            { id: "mec139-t3", name: "ETP", details: "Weightage: 50 marks" }
        ]
    }
];

// App State
let userSettings = JSON.parse(localStorage.getItem('testTrackerData_ios')) || {};

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupScrollListener();
    setInterval(updateAllCountdowns, 60000); // Update countdowns every minute
});

function initApp() {
    const container = document.getElementById('course-container');
    container.innerHTML = '';

    coursesData.forEach(course => {
        const group = document.createElement('div');
        group.className = 'course-group';
        
        group.innerHTML = `<div class="course-title">${course.course}</div>`;
        
        const list = document.createElement('div');
        list.className = 'ios-list';
        
        course.tests.forEach(test => {
            const testId = test.id;
            const savedData = userSettings[testId] || {};
            
            // Container for both the list item and its dropdown
            const itemContainer = document.createElement('div');
            
            const li = document.createElement('div');
            li.className = 'ios-list-item';
            if (savedData.date || savedData.syllabus || savedData.notes) {
                li.classList.add('has-data');
            }
            
            const isAttendance = test.name.toLowerCase().includes('attendance');
            
            let badgeHtml = '';
            if (savedData.date) {
                const cd = calculateCountdown(savedData.date, savedData.time);
                if (cd) {
                    badgeHtml = `<span class="badge" id="badge-${testId}">${cd}</span>`;
                }
            }

            li.innerHTML = `
                <div class="test-info">
                    <div class="test-name">${test.name}</div>
                    <div class="test-desc">${test.details}</div>
                </div>
                <div class="test-right">
                    ${badgeHtml}
                    ${!isAttendance ? '<i class="ph ph-caret-right chevron"></i>' : ''}
                </div>
            `;
            
            if (isAttendance) {
                li.style.cursor = 'default';
                li.classList.remove('has-data'); // Prevent border logic if any accidental data exists
            }
            
            // Dropdown for user data
            const dropdown = document.createElement('div');
            dropdown.className = 'user-info-dropdown';
            dropdown.id = `dropdown-${testId}`;
            
            let dpHtml = '';
            if (savedData.date) {
                dpHtml += `<div class="info-line"><span class="info-label">When:</span> <span class="info-text">${savedData.date} ${savedData.time ? savedData.time : ''}</span></div>`;
            }
            if (savedData.syllabus) {
                dpHtml += `<div class="info-line"><span class="info-label">Syllabus:</span> <span class="info-text">${savedData.syllabus}</span></div>`;
            }
            if (savedData.notes) {
                dpHtml += `<div class="info-line"><span class="info-label">Notes:</span> <span class="info-text">${savedData.notes}</span></div>`;
            }
            
            // Edit button inside dropdown
            dpHtml += `
                <div style="margin-top: 10px; text-align: right;">
                    <button style="color: var(--accent); background: none; border: none; font-size: 15px; font-weight: 500;" onclick="openModal('${course.id}', '${testId}')">Edit Details</button>
                </div>
            `;
            dropdown.innerHTML = dpHtml;

            // Click behavior: if it has data, toggle dropdown. If no data, open modal directly.
            if (!isAttendance) {
                li.addEventListener('click', () => {
                    if (savedData.date || savedData.syllabus || savedData.notes) {
                        dropdown.classList.toggle('open');
                        
                        // Rotate chevron
                        const icon = li.querySelector('.chevron');
                        if (dropdown.classList.contains('open')) {
                            icon.style.transform = 'rotate(90deg)';
                        } else {
                            icon.style.transform = 'rotate(0deg)';
                        }
                    } else {
                        openModal(course.id, testId);
                    }
                });
            }

            itemContainer.appendChild(li);
            itemContainer.appendChild(dropdown);
            list.appendChild(itemContainer);
        });
        
        group.appendChild(list);
        container.appendChild(group);
    });

    setupModalListeners();
}

function calculateCountdown(dateStr, timeStr) {
    if (!dateStr) return '';
    const targetDateStr = timeStr ? `${dateStr}T${timeStr}` : `${dateStr}T00:00:00`;
    const targetDate = new Date(targetDateStr);
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff < 0) return 'Passed';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d left`;
    if (hours > 0) return `${hours}h left`;
    return `<1h left`;
}

function updateAllCountdowns() {
    coursesData.forEach(course => {
        course.tests.forEach(test => {
            const savedData = userSettings[test.id];
            if (savedData && savedData.date) {
                const badge = document.getElementById(`badge-${test.id}`);
                if (badge) {
                    badge.textContent = calculateCountdown(savedData.date, savedData.time);
                }
            }
        });
    });
}

// Sticky Nav Logic
function setupScrollListener() {
    const navBar = document.getElementById('nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('visible');
        } else {
            navBar.classList.remove('visible');
        }
    });
}

// Modal Logic
const modal = document.getElementById('edit-modal');
const form = document.getElementById('details-form');

function openModal(courseId, testId) {
    const course = coursesData.find(c => c.id === courseId);
    const test = course.tests.find(t => t.id === testId);
    
    document.getElementById('modal-title').textContent = `${test.name}`;
    document.getElementById('modal-course-id').value = courseId;
    document.getElementById('modal-test-id').value = testId;
    
    const savedData = userSettings[testId] || {};
    
    document.getElementById('test-date').value = savedData.date || '';
    document.getElementById('test-time').value = savedData.time || '';
    document.getElementById('test-syllabus').value = savedData.syllabus || '';
    document.getElementById('test-notes').value = savedData.notes || '';
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function setupModalListeners() {
    document.getElementById('cancel-modal').addEventListener('click', closeModal);
    
    // Close when tapping outside the sheet
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const testId = document.getElementById('modal-test-id').value;
        
        const data = {
            date: document.getElementById('test-date').value,
            time: document.getElementById('test-time').value,
            syllabus: document.getElementById('test-syllabus').value,
            notes: document.getElementById('test-notes').value
        };
        
        // Save to iOS specific key so it doesn't clash with old data if they revert, 
        // but wait, let's use the same one so they keep their data. Let's change back to original key.
        // wait, I used testTrackerData_ios earlier in this file. Let's just use it to avoid issues, or actually I should use 'testTrackerData' so data carries over.
        // But testTrackerData_ios is already initialized at top. Let's overwrite both.
        
        userSettings[testId] = data;
        localStorage.setItem('testTrackerData_ios', JSON.stringify(userSettings));
        localStorage.setItem('testTrackerData', JSON.stringify(userSettings)); // Sync
        
        closeModal();
        initApp(); // Re-render to show new data
    });
}
