import { Document, Model, model, Schema } from "mongoose";
import { IProject} from "../../interfaces/IProject";

export interface IProjectModel extends IProject, Document {}

const projectSchema: Schema = new Schema(
    {
        title: String,
        description: String,
        creationDate: Date,

        // Keeping project ID as string rather than mongoose.ObjectId
        // Might need changing in the future
        projectId:String,

        fundingStatus: Boolean,
        reviewPassed: Boolean,
        feasibilityApproval: Boolean,
        numClinicians: Number,
        numParticipants: Number,
        numStudents: Number,
        numClinicStaff: Number,
        numPatients: Number,

    },
    {
        timestamps: true
    }
);

projectSchema.index({
    createdAt: 1
});

const Project: Model<IProjectModel> = model("Project", projectSchema);

export { Project };