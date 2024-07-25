// firebaseoperations.js

// Firebase Firestore reference
const db = firebase.firestore();

/**
 * Add a new member
 * @param {Object} memberData - Data of the member to be added
 */
function addMember(memberData) {
    db.collection('members').add(memberData)
        .then(() => {
            console.log('Member added successfully');
        })
        .catch(error => {
            console.error('Error adding member: ', error);
        });
}

/**
 * Update an existing member
 * @param {string} memberId - ID of the member to be updated
 * @param {Object} updatedData - Updated data of the member
 */
function updateMember(memberId, updatedData) {
    db.collection('members').doc(memberId).update(updatedData)
        .then(() => {
            console.log('Member updated successfully');
        })
        .catch(error => {
            console.error('Error updating member: ', error);
        });
}

/**
 * Delete an existing member
 * @param {string} memberId - ID of the member to be deleted
 */
function deleteMember(memberId) {
    db.collection('members').doc(memberId).delete()
        .then(() => {
            console.log('Member deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting member: ', error);
        });
}

/**
 * Create a new bill
 * @param {Object} billData - Data of the bill to be created
 */
function createBill(billData) {
    db.collection('bills').add(billData)
        .then(() => {
            console.log('Bill created successfully');
        })
        .catch(error => {
            console.error('Error creating bill: ', error);
        });
}

/**
 * Assign a fee package to a member
 * @param {string} memberId - ID of the member
 * @param {Object} feePackageData - Data of the fee package to be assigned
 */
function assignFeePackage(memberId, feePackageData) {
    db.collection('members').doc(memberId).update({
        feePackage: feePackageData
    })
        .then(() => {
            console.log('Fee package assigned successfully');
        })
        .catch(error => {
            console.error('Error assigning fee package: ', error);
        });
}

/**
 * Assign a monthly notification to a member
 * @param {string} memberId - ID of the member
 * @param {Object} notificationData - Data of the notification to be assigned
 */
function assignNotification(memberId, notificationData) {
    db.collection('members').doc(memberId).update({
        notification: notificationData
    })
        .then(() => {
            console.log('Notification assigned successfully');
        })
        .catch(error => {
            console.error('Error assigning notification: ', error);
        });
}

/**
 * Export a report
 * @param {Object} query - Query to filter the data for the report
 */
function exportReport(query) {
    db.collection('bills').where(...query).get()
        .then(snapshot => {
            let reportData = [];
            snapshot.forEach(doc => {
                reportData.push(doc.data());
            });
            console.log('Report exported successfully', reportData);
            // Implement your logic to handle the exported data
        })
        .catch(error => {
            console.error('Error exporting report: ', error);
        });
}

/**
 * Manage supplement store data
 * @param {Object} supplementData - Data of the supplement to be managed
 * @param {string} action - Action to be performed ('add', 'update', 'delete')
 * @param {string} [supplementId] - ID of the supplement (required for 'update' and 'delete' actions)
 */
function manageSupplementStore(supplementData, action, supplementId) {
    if (action === 'add') {
        db.collection('supplements').add(supplementData)
            .then(() => {
                console.log('Supplement added successfully');
            })
            .catch(error => {
                console.error('Error adding supplement: ', error);
            });
    } else if (action === 'update') {
        db.collection('supplements').doc(supplementId).update(supplementData)
            .then(() => {
                console.log('Supplement updated successfully');
            })
            .catch(error => {
                console.error('Error updating supplement: ', error);
            });
    } else if (action === 'delete') {
        db.collection('supplements').doc(supplementId).delete()
            .then(() => {
                console.log('Supplement deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting supplement: ', error);
            });
    } else {
        console.error('Invalid action for manageSupplementStore');
    }
}

/**
 * Manage diet details data
 * @param {Object} dietData - Data of the diet detail to be managed
 * @param {string} action - Action to be performed ('add', 'update', 'delete')
 * @param {string} [dietId] - ID of the diet detail (required for 'update' and 'delete' actions)
 */
function manageDietDetails(dietData, action, dietId) {
    if (action === 'add') {
        db.collection('dietDetails').add(dietData)
            .then(() => {
                console.log('Diet detail added successfully');
            })
            .catch(error => {
                console.error('Error adding diet detail: ', error);
            });
    } else if (action === 'update') {
        db.collection('dietDetails').doc(dietId).update(dietData)
            .then(() => {
                console.log('Diet detail updated successfully');
            })
            .catch(error => {
                console.error('Error updating diet detail: ', error);
            });
    } else if (action === 'delete') {
        db.collection('dietDetails').doc(dietId).delete()
            .then(() => {
                console.log('Diet detail deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting diet detail: ', error);
            });
    } else {
        console.error('Invalid action for manageDietDetails');
    }
}
