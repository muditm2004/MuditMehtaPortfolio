const mailService = require('./NodemailerMail');

exports.handleFormSubmission = async (req,res)=>{
        const{ name, email, subject, msg } =req.body;
        try {
            // Send email to yourself
            await mailService.sendToSelf(name, email, subject, msg);
    
            // Send auto-response email to the user
            await mailService.sendAutoResponse(name, email);
    
            res.status(200).send('Form submitted successfully!');
        } catch (error) {
            console.error('Error processing form submission:', error);
            res.status(500).send('Error processing form submission.');
        }
}